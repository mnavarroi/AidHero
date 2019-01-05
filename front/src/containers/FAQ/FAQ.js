import React, {Component} from 'react';
import '../FAQ/Footer-styles.css';
import {FooterH} from '../../components/common/Footer';
import {faq} from "../../components/footer/faq";


class FAQ extends Component {
    render() {
        return (
            <div>
                <h4>Frequently Asked Questions</h4>
                <faq/>
                <FooterH/>
            </div>
        )
    }
}

export default FAQ;