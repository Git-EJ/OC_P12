// import PropTypes from 'prop-types'

// const ConvertDataKind = ({ performanceData, performanceKind }) => {

//   if (!performanceKind && !performanceData) return (console.log('CDK', "NO DATA"))
//   console.log('PD', performanceData);
//   console.log('PK', performanceKind);

//   //TODO object or array ?
//   // const upperKind = {}
//   // Object.keys(performanceKind).forEach(key => {
//   //   upperKind[key] = performanceKind[key].charAt(0).toUpperCase() + performanceKind[key].slice(1)
//   // })

//   const upperKind= Object.values(performanceKind).map(el => el.charAt(0).toUpperCase() + el.slice(1))
  
//   return performanceData.map((el) => ({
//     value: el.value,
//     // kind: upperKind[el.kind] //for upperKind object
//     kind: upperKind[el.kind -1] //-1 for index zero of the map upperKind array
//   }))
// }


// ConvertDataKind.propTypes = {
//   performanceData: PropTypes.array,
//   performanceKind: PropTypes.object
// }

// export default ConvertDataKind