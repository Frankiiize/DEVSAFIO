import React, { Component } from 'react'

class MultipleCheckbox extends Component {

    state = {
        Names: {
            DevFrontEnd: false,
            DevFullStackBackend: false,
            DesignerUXUI: false,
            AnalystQA: false,
            DevMobile: false,
            Data: false,
            Other: false,
        }
    }
    chkclick = (e) => {
        const { name, checked } = e.target
        this.setState((e) => {
            const Selectedvalues = e.Names

            return Selectedvalues[name] = checked;
        })
    };


    render() {

        return (
            <div>
                <h1>Cargo/área de preferencia que buscas contratar:</h1>
                <br />
                <ul>
                    <li><input type="checkbox" name="DevFrontEnd" onChange={this.chkclick} />Desarrollador Front End&nbsp;&nbsp;</li>
                    <li> <input type="checkbox" name="DevFullStackBackend" onChange={this.chkclick} />Desarrollador Full Stack / Backend&nbsp;&nbsp; </li>
                    <li> <input type="checkbox" name="DesignerUXUI" onChange={this.chkclick} />Diseñador UX/UI&nbsp;&nbsp; </li>
                    <li>  <input type="checkbox" name="AnalystQA" onChange={this.chkclick} />Analista QA&nbsp;&nbsp;</li>
                    <li>  <input type="checkbox" name="DevMobile" onChange={this.chkclick} />Desarrollador Mobile&nbsp;&nbsp;</li>
                    <li>  <input type="checkbox" name="Data" onChange={this.chkclick} />Datos&nbsp;&nbsp;</li>
                    <li>  <input type="checkbox" name="Other" onChange={this.chkclick} />Otra&nbsp;&nbsp;</li>
                </ul>
                <br />

            </div>
        )
    }
}

export default MultipleCheckbox;