import React from 'react';
import bgimage from './bg_index_main_content.png';

const styles = {
    bgContainer: {
        backgroundImage: `url(${bgimage})`
    }
};
const Landing = () => {
    return (
      <div className="row">

        <div className="col s12 responsive-img"  style={styles.bgContainer}>
          <div className="col s6">
            <h1 className="deep-orange-text text-accent-4"> textttttt:</h1>
            <h1  className="white-text">More text....</h1>
            <ul>
                <li>morer</li>
                <li>some morer</li>

            </ul>
            <button className="btn btn-info">click</button>
          </div>
          <div className="col s6">6-columns (one-half)</div>
        </div>
      </div>
    );
};
export default Landing;


//                <li><font className="">Present your idea live</font> and within minutes to a global network of pre-screened investors.</li>
//                <li><font className="">Gain immediate feedback</font> to train and develop your pitch - no matter if online, or offline.</li>
//                <li><font className="">Find an investor</font> that complements you.</li>