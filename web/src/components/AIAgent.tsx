'use client';

import { useEffect, useState, useCallback } from 'react';
import { useAIAgent } from '@/context/AIAgentContext';

export default function AIAgent() {
    const ElevenLabsConvai = 'elevenlabs-convai' as any;
    const { notifications, updateAtmosphere, addNotification } = useAIAgent();
    const [position, setPosition] = useState({ right: 20, bottom: 20 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    // Initial Positioning
    useEffect(() => {
        setPosition({
            right: 40,
            bottom: 40
        });
    }, []);

    // Script injection
    useEffect(() => {
        if (typeof window !== 'undefined' && !document.querySelector('script[src*="convai-widget"]')) {
            const script = document.createElement('script');
            script.src = "https://elevenlabs.io/convai-widget/index.js";
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    // Drag Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        // Calculate offset from the RIGHT and BOTTOM edges
        setDragOffset({
            x: (window.innerWidth - e.clientX) - position.right,
            y: (window.innerHeight - e.clientY) - position.bottom
        });
        e.preventDefault();
        e.stopPropagation();
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (isDragging) {
            const newRight = (window.innerWidth - e.clientX) - dragOffset.x;
            const newBottom = (window.innerHeight - e.clientY) - dragOffset.y;

            // Bounds: keep it within screen but away from edges
            setPosition({
                right: Math.max(20, Math.min(window.innerWidth - 100, newRight)),
                bottom: Math.max(20, Math.min(window.innerHeight - 100, newBottom))
            });
        }
    }, [isDragging, dragOffset]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, handleMouseMove, handleMouseUp]);

    // Atmosphere Tool Bridging & Error Handling
    useEffect(() => {
        const handleToolCall = (event: any) => {
            const { name, parameters } = event.detail;
            if (name === "update_ui_atmosphere") {
                updateAtmosphere(parameters.mood_theme || 'default', parameters.action);
                if (event.detail.resolve) event.detail.resolve("UI updated.");
            }
        };

        const handleError = async (event: any) => {
            console.error("ElevenLabs Widget Error:", event.detail);

            // Check for microphone
            try {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const hasMic = devices.some(d => d.kind === 'audioinput');
                if (!hasMic) {
                    addNotification(
                        'Voice Agent Error',
                        'No microphone detected. Please connect a microphone to use voice features.',
                        'warning'
                    );
                } else {
                    addNotification(
                        'Voice Agent Error',
                        'Microphone detected but could not be accessed. Please check your browser permissions.',
                        'warning'
                    );
                }
            } catch (err) {
                addNotification('Voice Agent Error', 'Could not access media devices.', 'warning');
            }
        };

        window.addEventListener('elevenlabs-convai:call', handleToolCall);
        window.addEventListener('elevenlabs-convai:error', handleError);

        return () => {
            window.removeEventListener('elevenlabs-convai:call', handleToolCall);
            window.removeEventListener('elevenlabs-convai:error', handleError);
        };
    }, [updateAtmosphere, addNotification]);

    return (
        <div
            style={{
                position: 'fixed',
                bottom: `${position.bottom}px`,
                right: `${position.right}px`,
                zIndex: 2147483647,
                cursor: isDragging ? 'grabbing' : 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end', // Items align to the right edge (the anchor)
                pointerEvents: 'none',
                maxWidth: '90vw'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* SMALL DRAG HANDLE */}
            <div className="flex space-x-2 items-center mb-2 pointer-events-auto">
                <div
                    onMouseDown={handleMouseDown}
                    className={`w-9 h-9 bg-indigo-600 border-2 border-white text-white rounded-full cursor-grab active:cursor-grabbing shadow-lg flex items-center justify-center transition-all duration-300 ${isDragging || (isHovered && !isDragging) ? 'scale-110 opacity-100' : 'opacity-60'}`}
                    title="Drag to move"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                    </svg>
                </div>

                <button
                    onClick={async () => {
                        try {
                            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                            stream.getTracks().forEach(t => t.stop());
                            addNotification('Success', 'Microphone is connected and accessible.', 'success');
                        } catch (err: any) {
                            addNotification('Diagnostic', `Error: ${err.message}. Please check browser permissions and Windows microphone privacy settings.`, 'warning');
                        }
                    }}
                    className="p-1.5 bg-white border border-gray-200 rounded-full shadow-sm text-gray-500 hover:text-indigo-600 transition-colors"
                    title="Run Microphone Diagnostic"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                </button>
            </div>

            {/* Force widget to be relative and movable with this div */}
            <div className="pointer-events-auto flex flex-col items-end">
                {/* @ts-ignore */}
                <ElevenLabsConvai
                    agent-id="agent_9601kgz2gfs9fg7trsaz4dqew3ep"
                    action-text="Talk with future you"
                    expand-text="Talk with future you"
                    chat-title="Talk with future you"
                    type="standalone"
                    variant="expanded"
                ></ElevenLabsConvai>
            </div>

            <style jsx global>{`
                elevenlabs-convai {
                    position: relative !important;
                    display: block !important;
                    inset: auto !important;
                    width: 400px !important;
                    /* Remove height constraints to let internal layout breathe */
                }
            `}</style>
        </div>
    );
}
