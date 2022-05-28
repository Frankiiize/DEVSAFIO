import { Formik, useFormik } from "formik";
import React, { useState, useSyncExternalStore } from "react";
import { InputComponent } from "../../components/common/InputComponent";
import { jopProfileShema as schema } from "../../components/schemas/schema";
import { validate, handlerInputChangeCreator } from "../../utils/utils";

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
        id: 'business',
        placeholder: 'nombre empresa',
        name: 'business',
        label: '¿a que empresa perteneces?',
        autoComplete: '',
    },
    {
        titleHead: {
            show: true,
            title: 'Cargo/área de preferencia que buscas contratar:'
        },
        type: 'checkbox',
        id: 'DevFrontEnd',
        name: 'DevFrontEnd',
        label: 'Desarrollador Front End',
    },
    {
        type: 'checkbox',
        id: 'DevFullStackBackend',
        name: 'DevFullStackBackend',
        label: 'Desarrollador Full Stack',
    },
    {
        type: 'checkbox',
        id: 'DesignerUXUI',
        name: 'DesignerUXUI',
        label: 'Diseñador UX/UI',
    },
    {
        type: 'checkbox',
        id: 'AnalystQA',
        name: 'AnalystQA',
        label: 'Analista QA',
    },
    {
        type: 'checkbox',
        id: 'DevMobile',
        name: 'DevMobile',
        label: 'Desarrollador Mobile',
    },
    {
        type: 'checkbox',
        id: 'Data',
        name: 'Data',
        label: 'Datos',
    },
    {
        type: 'checkbox',
        id: 'Other',
        name: 'Other',
        label: 'Otra',
    },
    {
        type: 'text',
        id: 'doubts',
        placeholder: 'dudas...',
        name: 'doubts',
        label: '¿dudas? dejalas aca',
        autoComplete: '',
    },
]



const JobProfile = () => {

    const [check, setCheck] = useState(false);

    const onSubmit = (values) => {
        if (formik.values.DevFrontEnd === true || formik.values.DevFullStackBackend === true || formik.values.DesignerUXUI === true || formik.values.AnalystQA === true || formik.values.DevMobile === true || formik.values.Data === true || formik.values.Other === true) {
            console.log(values);
        } else {
            setCheck(true)
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            number: '',
            business: '',
            DevFrontEnd: false,
            DevFullStackBackend: false,
            DesignerUXUI: false,
            AnalystQA: false,
            DevMobile: false,
            Data: false,
            Other: false,
            doubts: '',
        },
        onSubmit: onSubmit,
        validate: validate(schema)
    })
    const handleTxtChange = handlerInputChangeCreator(formik);
    // console.log(formik)


    return (

        <>
            <div className="bg-primary min-h-screen m-0 grid justify-items-center ">
                <div >
                    <img className="w-1/4" src="https://devsafio.com/wp-content/uploads/2022/02/DEV-IMAGOTIPO-WHITE-HORIZONTAL.png" alt='logo' />
                </div>
                <div className="flex h-100">
                    <div className="w-full  rounded  mx-auto bg-white p-4 ">
                        <h3 className="text-lg">Buscas talento TI? En breve te contactaremos:</h3>

                        <form className="p-1" onSubmit={formik.handleSubmit}>
                            <div className="mt-2 mb-4">

                                {
                                    inputConfig.map((item, index) => (
                                        <InputComponent
                                            key={`input-${index}${item.name}`}
                                            label={item.label}
                                            type={item.type}
                                            titleHead={item.titleHead}
                                            id={item.id}
                                            placeholder={item.placeholder}
                                            name={item.name}
                                            formik={formik}
                                            onChange={handleTxtChange}
                                        />
                                    ))
                                }
                                {/* {!!check && <span className="text-error">Selecciona Algun check</span>} */}
                                {check === true ? <span className="text-error">Seleccionar al menos una casilla</span> : ''}

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
