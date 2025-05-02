export function optimizeCloudinaryUrl(
  url: string,
  params = "f_auto,q_auto:low,fl_strip_profile,fl_progressive"
) {
  const cloudinaryRegex = /(upload\/)/;

  if (!cloudinaryRegex.test(url)) {
    throw new Error("Invalid Cloudinary URL");
  }

  return url.replace(cloudinaryRegex, `$1${params}/`);
}
