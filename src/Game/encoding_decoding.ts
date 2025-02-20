export function encodeBase64(str: string): string {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    const binaryString = String.fromCharCode(...bytes);
    return btoa(binaryString);
};

export function decodeBase64(base64: string): string {
    const binaryString = atob(base64);
    const bytes = new Uint8Array([...binaryString].map(char => char.charCodeAt(0)));
    const decoder = new TextDecoder();
    return decoder.decode(bytes);
};