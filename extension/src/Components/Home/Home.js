import React from 'react';
import logo from './../../logo.svg';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Button, Paper } from '@material-ui/core'
import Timer from './../Timer/Timer'

class Home extends React.Component {

    render() {
        return (
            <Container maxWidth="sm" className="App">
                <Timer />
            </Container>
        );
    }
}

export default Home