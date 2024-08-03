const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

// Initialize Cloudinary
// Configuration
cloudinary.config({
    cloud_name: 'doluvumlx',
    api_key: '488891386461574',
    api_secret: 'bZJE_wtvwi3g7tsnVIEhhAYtwB0'
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