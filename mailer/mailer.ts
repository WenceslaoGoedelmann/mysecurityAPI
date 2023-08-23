import nodemailer from "nodemailer"

//Configuaracion del transporte
//recordar crear el correo con validacion en dos pasos
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "mysregister@gmail.com",
        pass: "uslbqmwkzymxhwbo"
    },
    from: "mysregister@gmail.com"
})

// Función para enviar un correo electrónico

export const sendEmail =async (to:string, code: string):Promise<void> => {
    try{
        //configuracion de detalles para el correo electrónico
        const mailOptions={
            from: '"My Security" mysregister@gmail.com',
            to,
            subject: "Código de verificación para tu cuenta",
            text: `
                Llegó tu código para My Security.
                El código para verificarte es : ${code}
            `
        }
        //enviar el correo electrónico
        await transporter.sendMail(mailOptions)
        console.log("Correo electrónico enviado")
    }catch(error){
        console.error("Error al enviar el correo electrónico", error)
    }
}