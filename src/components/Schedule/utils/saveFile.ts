// saves a file from URL
export const saveFile = (url: string, fileName: string) => {
  try {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    // some browser needs the anchor to be in the doc
    document.body.append(link);
    link.click();
    link.remove();
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
  }
};
