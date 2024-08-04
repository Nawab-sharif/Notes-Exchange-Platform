const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

// Initialize Cloudinary
// Configuration
cloudinary.config({
    cloud_name: 'doluvumlx',
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

exports.uploadFile = async (file) => {
    const promise = new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { resource_type: 'auto' },
            (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            }
        );
        streamifier.createReadStream(file).pipe(stream);
    })

    return promise
}