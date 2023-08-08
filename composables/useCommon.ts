export default function () {
  const readFileData = async (file: any) => {
    return new Promise<string>((resolve, reject) => {
      try {
        let reader = new FileReader();
        reader.onload = (e) => {
          resolve(e.target?.result || "");
        };
        reader.readAsDataURL(file);
      } catch (e) {
        reject(e);
      }
    });
  };
  return {
    readFileData,
  };
}
