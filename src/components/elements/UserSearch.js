// import React from 'react'
// import AutoComplete from 'material-ui/AutoComplete';
//
//
// export default class MyForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataSource:[]
//     };
//   }
//
//   componentDidMount = () => {
//     this.fetchData()
//   }
//     // ...
//     onSubmit(values) {
//         console.log('-> submit', values); // return `{thing: "Something"}`
//     }
//     fetchData = () => {
//       api.getAll()
//       .then(res => {
//         this.setState({
//           dataSource:res.body
//         })
//       })
//       .then(
//         console.log(this.state.dataSource, "datasource inside fetchData")
//       )
//     }
//
//
//     render() {
//       const dataSource = this.state.dataSource
//       console.log(dataSource, "datasourceinsiderender")
//       // const newDataSource = dataSource.map(item => {
//       //   return Object.assign({fullName:item.firstName+ " " +item.lastName},item)});
//
//       const dataSourceConfig = {
//         text: 'firstName',
//         value: 'userId'
//       };
//         return
//         <form onSubmit={handleSubmit(this.onSubmit)}>
//             <Field
//                 name="thing"
//                 component={renderAutoComplete}
//                 dataSource={things}
//                 dataSourceConfig={{
//                     text: 'name',
//                     value: 'id',
//                 }}
//                 onNewRequest={(value) => value.id}
//                 filter={AutoComplete.caseInsensitiveFilter}
//                 openOnFocus={true}
//             />
//         </form>;
//     }
// }
