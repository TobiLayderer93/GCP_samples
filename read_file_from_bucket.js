function downloadFile(bucketName, srcFilename, destFilename) {

  process.env['GOOGLE_APPLICATION_CREDENTIALS'] = 'PATH/TO/SERVICE-ACCOUNT'

  const Storage = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  const bucketName = bucketName;
  const srcFilename = srcFilename;
  const destFilename = destFilename;

  const options = {
    // The path to which the file should be downloaded, e.g. "./file.txt"
    destination: destFilename,
  };

  // Downloads the file
  storage
    .bucket(bucketName)
    .file(srcFilename)
    .download(options)
    .then(() => {
      console.log(
        `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
      );
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}
