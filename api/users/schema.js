const yup = require('yup');

const putlockSchema = yup.object().shape({
    potluck_name: yup
        .string('potluck name need to be a string')
        .trim()
        .min(3, 'potluck name need to be at least 3 character')
        .strict(true)
        .required('potluck name is required'),
    date: yup.date('date is date').required('date is required').strict(true),

    time: yup
        .string('descriptions is time')
        .trim()
        .required('time is required')

        .strict(true),

    location: yup
        .string('location is string')
        .trim()
        .required('location is required')

        .strict(true),
});

module.exports = putlockSchema;
