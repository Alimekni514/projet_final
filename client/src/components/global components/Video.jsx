import { Component } from 'react';
import {GiSoundOff} from 'react-icons/gi'
import {GiSoundOn} from 'react-icons/gi'
import crown from '../../img/crown.jpg'
import crownn from '../../img/crown.mp4'
import { Player,ControlBar } from 'video-react';
export default class Video extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: crownn
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  render() {
    return (
      <div>
        <Player
          
          ref={player => {
            this.player = player;
          }}
          autoPlay
          muted
        >
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
        <div className='overr'>
        <div className="py-3 ">
          <button onClick={this.play} className="">
            play
          </button>
          <button onClick={this.pause} className="">
            pause
          </button>
          
        </div>
        
        
        <div className="pb-3">
          
          <GiSoundOff  onClick={this.setMuted(true)} className="mr-3"/>
          
          <GiSoundOn onClick={this.setMuted(false)} className="mr-3"/>
          
        </div>
        </div>
      </div>
    );
  }
}
