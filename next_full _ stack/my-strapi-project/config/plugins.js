module.exports = ({ env }) => ({
   // ...
   upload: {
     config: {
       provider: 'cloudinary',
       providerOptions: {
         cloud_name: env('ddzvwalpm'),
         api_key: env('939213241771858'),
         api_secret: env('btvu1U0F2sxP9VIBlr8haVPXCH8'),
       },
       actionOptions: {
         upload: {},
         uploadStream: {},
         delete: {},
       },
     },
   },
   // ...
 });