export function GetImage(imageId, size = 's') {
    return (
        'https://i.imagur.com' +
        imageId +
        size +
        '.jpg'
    )
}