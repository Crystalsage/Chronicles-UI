export interface Message {
    timestamp: number,
    content: string,
    author: string,
}

export interface Post {
    id: number,
    platform: string,
    messages: Message[],
}