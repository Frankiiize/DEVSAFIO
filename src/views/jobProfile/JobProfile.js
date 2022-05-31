import { Formik, useFormik } from "formik";
import React, { useEffect, useState, useSyncExternalStore } from "react";
import { InputComponent } from "../../components/common/InputComponent";
import { jopProfileShema as schema } from "../../components/schemas/schema";
import { validate, handlerInputChangeCreator } from "../../utils/utils";
import { Nav } from "../../components/nav/Nav";
import { ButtonComponent } from "../../components/common/ButtonComponent";

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

        // checkced: 'accepted'
    },
    {
        type: 'checkbox',
        id: 'DevFullStackBackend',
        name: 'DevFullStackBackend',
        label: 'Desarrollador Full Stack',

        // checkced: 'accepted'
    },
    {
        type: 'checkbox',
        id: 'DesignerUXUI',
        name: 'DesignerUXUI',
        label: 'Diseñador UX/UI',

        // checkced: 'accepted'
    },
    {
        type: 'checkbox',
        id: 'AnalystQA',
        name: 'AnalystQA',
        label: 'Analista QA',

        // checkced: 'accepted'
    },
    {
        type: 'checkbox',
        id: 'DevMobile',
        name: 'DevMobile',
        label: 'Desarrollador Mobile',

        // checkced: 'accepted'
    },
    {
        type: 'checkbox',
        id: 'Data',
        name: 'Data',
        label: 'Datos',

        // checkced: 'accepted'
    },
    {
        type: 'checkbox',
        id: 'Other',
        name: 'Other',
        label: 'Otra',

        // checkced: 'accepted'
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
            accepted: false,
            doubts: '',
        },
        onSubmit: onSubmit,
        validate: validate(schema)
    })
    const handleTxtChange = handlerInputChangeCreator(formik);
    // console.log(formik)
    useEffect(() => {
        setCheck(false)
    }, [
        formik.values.DevFrontEnd,
        formik.values.DevFullStackBackend,
        formik.values.DesignerUXUI,
        formik.values.AnalystQA,
        formik.values.DevMobile,
        formik.values.Data,
        formik.values.Other,
    ])


    return (

        <>
            <div className="bg-primary min-h-screen flex flex-col">
                <Nav />
                <section className=" flex grow items-center">
                    <div className="container mb-16  mx-auto mt-4">
                        <div className="w-full md:w-4/5 lg:w-2/4  rounded-t  mx-auto bg-white pt-5 md:pt-10 px-4 md:pb-0">
                            <h3 className="text-3xl px-4">Buscas talento TI? En breve te contactaremos:</h3>
                        </div>
                        <div className="w-full md:w-4/5 lg:w-2/4  rounded-b  mx-auto bg-white pt-0 px-4 md:pb-7 ">
                            <form className="p-1" onSubmit={formik.handleSubmit}>

                                <div className="p-4">


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
                                            // checkced={formik.values.accepted}

                                            />
                                        ))
                                    }
                                    {/* {!!check && <span className="text-error">Selecciona Algun check</span>} */}
                                    {check === true ? <span className="text-error">Seleccionar al menos una casilla</span> : ''}
                                    {/* {formik.errors.accepted && formik.touched.name ? <span style={{ color: 'red' }} > {formik.errors.accepted}</span> : ''} */}
                                </div>

                                {/* <div >
                                    <button type="submit" className="btn btn-wide color: bg-primary ">Enviar</button>
                                </div> */}
                                <ButtonComponent
                                    style={'primary'}
                                    type={'submit'}>

                                </ButtonComponent>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
};

export default JobProfile;
