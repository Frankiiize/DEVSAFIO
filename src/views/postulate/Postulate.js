import { Formik, useFormik } from "formik";
import React from "react";
import { InputComponent } from "../../components/common/InputComponent";
import { registerSchema as schema } from "../../components/schemas/schema";
import { validate } from "../../utils/utils";

// import MultipleCheckbox from "../../components/common/MultipleCheckbox"


const inputConfig = [
    {
        type: 'text',
        id: 'name',
        placeholder: 'tu nombre',
        name: 'name',
        label: 'nombre',
        autoComplete: 'given-name',
    },
    {
        type: 'text',
        id: 'lastName',
        placeholder: 'tu apellido',
        name: 'lastName',
        label: 'Apellido',
        autoComplete: 'family-name',
    },
    {
        type: 'email',
        id: 'email',
        placeholder: 'email@gmail.com',
        name: 'email',
        label: 'email',
        autoComplete: 'email',
    },
    {
        type: 'tel',
        id: 'number',
        placeholder: 'numero telefono',
        name: 'number',
        label: 'numero telefono',
        autoComplete: 'number',
    },
    {
        type: 'text',
        id: 'empresa',
        placeholder: 'nombre empresa',
        name: 'empresa',
        label: '¿a que empresa perteneces?',
        autoComplete: '',
    },
]
const inputDoubts = [
    {
        type: 'text',
        id: 'doubts',
        placeholder: 'dudas...',
        name: 'doubts',
        label: '¿dudas? dejalas aca',
        autoComplete: '',
    },
]


const onSubmit = (values) => {
    console.log(values);
}

const JobProfile = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            password: '',
            c_password: '',
        },
        onSubmit: onSubmit,
        validate: validate(schema)
    })

    return (

        <>
            <div className="bg-primary min-h-screen m-0  ">
                <div >
                    <img className="w-1/4" src="https://devsafio.com/wp-content/uploads/2022/02/DEV-IMAGOTIPO-WHITE-HORIZONTAL.png" alt='logo' />
                </div>
                <div className="flex h-100">
                    <div className="w-full  rounded  mx-auto bg-white p-4 ">
                        <h3 className="text-xl">buscas talento TI? En breve te contactaremos:</h3>

                        <form className="p-1" onSubmit={formik.handleSubmit}>
                            <div className="mt-2 mb-4">
                                {
                                    inputConfig.map((item, index) => (
                                        <InputComponent
                                            key={`input-${index}${item.name}`}
                                            label={item.label}
                                            type={item.type}
                                            id={item.id}
                                            placeholder={item.placeholder}
                                            name={item.name}
                                            formik={formik}
                                        />
                                    ))
                                }
                            </div>
                            <div>
                                {/* 
                                <MultipleCheckbox /> */}

                            </div>
                            <div className="mt-2 mb-4">
                                {
                                    inputDoubts.map((item, index) => (
                                        <InputComponent
                                            key={`input-${index}${item.name}`}
                                            label={item.label}
                                            type={item.type}
                                            id={item.id}
                                            placeholder={item.placeholder}
                                            name={item.name}
                                            formik={formik}
                                        />
                                    ))
                                }
                            </div>
                            <div >
                                <button type="submit" className="btn btn-wide color: bg-primary ">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
};

export default JobProfile;
