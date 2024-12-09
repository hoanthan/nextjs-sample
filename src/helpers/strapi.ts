export function getCdnUrl(url?: string) {
    if (!url) return undefined
    if (url.startsWith('http')) return url;

    return `${process.env.NEXT_PUBLIC_API_DOMAIN}${url}`;
}
