export {};

declare global {
    interface Window {
        electronAPI: {
            movePointer: () => void;
        };
    }
}
