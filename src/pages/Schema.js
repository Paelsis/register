import ViewSchema from '../components/ViewSchema'

const groupByArr = [
    {
        groupBy:'year',
        style:{width:'50%', height:30, marginTop:10, textAlign:'center', margin:'auto', color:'lightBlue', backgroundColor:'blue'}
    }, 
    {
        groupBy:'courseId',
        style:{width:'40%', height:30, marginTop:5, textAlign:'center', margin:'auto', color:'blue', backgroundColor:'lightBlue'}
    },
    {
        groupBy:'productId',
        style:{width:'30%', height:30, marginTop:5, textAlign:'center', margin:'auto', color:'yellow', backgroundColor:'red'}
    }
]

export default () => <ViewSchema groupByArr={groupByArr} />
