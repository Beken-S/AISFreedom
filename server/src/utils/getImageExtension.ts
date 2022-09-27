function getImageExtension(mimeType: string): string | null {
  switch (mimeType) {
    case 'image/apng':
      return '.apng';
    case 'image/avif':
      return '.avif';
    case 'image/gif':
      return '.gif';
    case 'image/jpeg':
      return '.jpeg';
    case 'image/png':
      return '.png';
    case 'image/svg+xml':
      return '.svg';
    case 'image/webp':
      return '.webp';
    default:
      return null;
  }
}

export default getImageExtension;
