import React from 'react';

import './Terminal.css'

class TerminalItem extends React.Component {

    static defaultProps = {
      prefix: '',
      dataText: [],
      lastLine: false,
      firstLine: false,
      typeSpeed: 50,
      deleteSpeed: 15,
    }

    constructor(props) {
      super(props);

      this.state = {
        text: '',
        isDeleting: false,
        loopNum: 0,
        typingSpeed: 150,
        Stopped: false,
        cursor:'cursor',
      }
    }

    componentDidMount() {
      if(this.props.firstLine){
        setTimeout(this.handleType, 3000)
      } else {
        this.handleType()
      }
    }
    
    componentWillUnmount() {
      // fix Warning: Can't perform a React state update on an unmounted component
      this.setState = (state,callback)=>{
          return;
      };
    }

    handleType = () => {
      const { dataText, typeSpeed, deleteSpeed } = this.props;
      const { isDeleting, loopNum, text, typingSpeed, Stopped, cursor } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];

      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? deleteSpeed : typeSpeed
      });


      if (!isDeleting && text === fullText && fullText !== dataText[dataText.length -1]) {

        setTimeout(() => this.setState({ isDeleting: true }), 500);

      } else if (isDeleting && text === '') {

        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });
      } else if(text === dataText[dataText.length - 1] && text.length === dataText[dataText.length -1].length && !Stopped){
          // console.log('Done typing')
          this.setState({Stopped: true})
          setTimeout(() => this.props.animationHandler(), 200);
          if(!this.props.lastLine){
            setTimeout(() => this.setState({cursor: 'cursorComplete'}), 200);
          }
          // this.setState({cursor: 'cursorComplete'})
      }
      setTimeout(this.handleType, typingSpeed);
    };

    render() {
      return (
        <h4 className='terminalText'>{ this.props.prefix }&nbsp;
          <span>{ this.state.text }</span>
          <span className={this.state.cursor}/>
        </h4>
      );

    }
  }


  export default TerminalItem;