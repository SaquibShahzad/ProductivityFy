import React from 'react';
import { Button, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'


class TimerBasic extends React.Component {
    render() {
        return (
            <Paper>
                <Grid container justify="center">
                    <Typography variant="h1" component="h1">
                        {this.props.time}:{this.props.seconds}
                    </Typography>
                </Grid>
            </Paper>
        );
    }


}

class LongBreak extends React.Component {
    render() {
        return (
            <Button variant="contained" color="primary" onClick={this.props.longBreak}>Long Break</Button>
        );
    }
}

class Session extends React.Component {
    render() {
        return (
            <Button variant="contained" color="primary" onClick={this.props.session}>Session</Button>
        );
    }
}

class ShortBreak extends React.Component {

    render() {
        return (
            <Button variant="contained" color="primary" onClick={this.props.shortBreak}>Short Break</Button>
        );
    }

}

class StartButton extends React.Component {

    render() {
        return (
            <Button variant="contained" color="primary" onClick={this.props.startCountDown}>Start</Button>
        );
    }
}

class StopButton extends React.Component {
    render() {
        return (
            <Button variant="contained" color="primary" onClick={this.props.stopCountDown}>Stop</Button>
        );
    }
}

class ResetButton extends React.Component {
    render() {
        return (
            <Button variant="contained" color="primary" onClick={this.props.resetCountDown}>Reset</Button>
        );
    }
}



class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 25,
            longBreakTime: 10,
            shortBreakTime: '05',
            seconds: '00',

        }
        this.intervalHandle = 0;
        this.secondsRemaining = 0;
        this.shortBreak = this.shortBreak.bind(this);
        this.longBreak = this.longBreak.bind(this);
        this.session = this.session.bind(this);
        this.startCountDown = this.startCountDown.bind(this);
        this.stopCountDown = this.stopCountDown.bind(this);
        this.tick = this.tick.bind(this);

    }

    tick() {

        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);

        this.setState({
            time: min,
            seconds: sec,
        })

        if (sec < 10) {
            this.setState({
                seconds: "0" + this.state.seconds,
            })

        }

        if (min < 10) {
            this.setState({
                time: "0" + min,
            })

        }

        if (min === 0 & sec === 0) {
            clearInterval(this.intervalHandle);
        }


        this.secondsRemaining--
    }


    startCountDown() {
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.state.time;
        this.secondsRemaining = time * 60;
    }

    stopCountDown() {
        clearInterval(this.intervalHandle);
    }

    shortBreak() {
        this.setState({
            time: "05",
            seconds: "00",
            cachedTime: 5
        })
    }

    longBreak() {
        this.setState({
            time: 10,
            seconds: "00",
            cachedTime: 10
        })
    }

    session() {
        this.setState({
            time: 25,
            seconds: "00",
            cachedTime: 25
        })
    }




    render() {

        return (
            <Container style={{ justifyContent: 'center' }}>
                <Grid container justify="center">
                    <ShortBreak shortBreak={this.shortBreak} />
                    <LongBreak longBreak={this.longBreak} />
                    <Session session={this.session} />
                </Grid>

                <TimerBasic time={this.state.time} seconds={this.state.seconds} />
                <Grid container justify="center">
                    <StopButton stopCountDown={this.stopCountDown} />
                    <StartButton startCountDown={this.startCountDown} />
                </Grid>
            </Container>
        );

    }

}



export default Timer;