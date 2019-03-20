import React, { Component } from 'react';

class Footer extends Component {
    renderContent() {
        return [
            <li key="1">© 2018 xyz AS, Norway</li>,
            <li key="3" style={{ margin: '0 10px' }}><a className="white-text text-lighten-4" href="">Contact</a></li>,
            <li key="2"><a className="white-text text-lighten-4" href="">Impressum</a></li>
        ];
        }
               
    render() {
        return (
            <footer>
                    <nav>
                        <div className="nav-wrapper deep-orange accent-4">
                            <ul className="right">
                                {this.renderContent()}
                            </ul>
                        </div>
                    </nav>
            </footer>
        );
    }
}

export default Footer;

