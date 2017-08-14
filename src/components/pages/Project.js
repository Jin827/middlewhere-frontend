import React, {Component} from 'react';
import api from '../../api';
import BookmarkCard from '../elements/BookmarkCard';
import auth from '../../auth';
import './Project.css';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      bookmarks: [],
      updatedAt: ""
    };
  }

  componentDidMount() {
    this.fetchBoardData()
  }

  fetchBoardData = () => {
      // Promise.all([
      //   api.getBoard(this.props.params.id),
      //   api.getBookmarks(this.props.params.id)
      // ])
      // .then(res => {
      //   this.setState({
      //     title: res[0].body.title,
      //     description: res[0].body.description,
      //     bookmarks: res[1].body.bookmarks
      //   })
      // })
      // .catch(console.error)
      //put fake data here to test
  }

  render() {
    let { bookmarks } = this.state
    return (
      <div className="board">
        { bookmarks.map(b =>
          <TaskCard
            key={b.id}
            id={b.id}
            title={b.title}
            description={b.description}
            url={b.url}
          />
        )}
      </div>
    );
  }

}
