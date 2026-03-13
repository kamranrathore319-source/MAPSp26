
// // // // import React, { useState } from "react";
// // // // import { Alert, Button, FlatList, Text, TextInput, View } from "react-native";

// // // // // const App = () => {
// // // // //   const [name, setName] = useState("");
// // // // //   const [salary, setSalary] = useState("");
// // // // //   const [empID, setEmpID] = useState(101);
// // // // //   const [employees, setEmployees] = useState([]);

// // // // //   const addEmployee = () => {
// // // // //     if (!name || !salary) {
// // // // //       Alert.alert("Please fill all fields");
// // // // //       return;
// // // // //     }

// // // // //     let emp = { empID, name, salary };

// // // // //     // ✅ correct state update
// // // // //     setEmployees([...employees, emp]);

// // // // //     setEmpID(empID + 1);
// // // // //     setName("");
// // // // //     setSalary("");
// // // // //   };

// // // // //   const showEmp = () => {
// // // // //     const data = employees.find(e => e.name === name);
// // // // //     if (data)
// // // // //       Alert.alert(`Name: ${data.name}\nSalary: ${data.salary}`);
// // // // //     else
// // // // //       Alert.alert("Not Found");
// // // // //   };

// // // // //   return (
// // // // //     <View style={{ flex: 1 }}>
// // // // //       <Text style={{ fontSize: 40, textAlign: "center" }}>
// // // // //         Employee Form
// // // // //       </Text>

// // // // //       <TextInput
// // // // //         placeholder="Enter Name"
// // // // //         value={name}
// // // // //         onChangeText={setName}
// // // // //         style={{
// // // // //           borderWidth: 2,
// // // // //           fontSize: 25,
// // // // //           margin: 10,
// // // // //           padding: 10,
// // // // //           borderRadius: 10,
// // // // //         }}
// // // // //       />

// // // // //       <TextInput
// // // // //         placeholder="Enter Salary"
// // // // //         value={salary}
// // // // //         onChangeText={setSalary}
// // // // //         keyboardType="numeric"
// // // // //         style={{
// // // // //           borderWidth: 2,
// // // // //           fontSize: 25,
// // // // //           margin: 10,
// // // // //           padding: 10,
// // // // //           borderRadius: 10,
// // // // //         }}
// // // // //       />

// // // // //       <View style={{ width: "50%", alignSelf: "center", margin: 10 }}>
// // // // //         <Button title="ADD" onPress={addEmployee} />
// // // // //       </View>

// // // // //       <View style={{ width: "50%", alignSelf: "center", margin: 10 }}>
// // // // //         <Button title="Show" onPress={showEmp} />
// // // // //       </View>

// // // // //       <FlatList
// // // // //         data={employees}
// // // // //         keyExtractor={(item) => item.empID.toString()}
// // // // //         renderItem={({ item }) => (
// // // // //           <Text style={{ fontSize: 25, borderWidth: 2, margin: 10 }}>
// // // // //             {item.empID} | {item.name} | {item.salary}
// // // // //           </Text>
// // // // //         )}
// // // // //       />
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // export default App;
// // // // const App=()=>{
// // // //     const[name,setName]=useState('');
// // // //     const[Cgpa,setCgpa]=useState('');
// // // //     const[Regno,setRegno]=useState('');
// // // //     const[Section,setSection]=useState('');
// // // //     const[student,setStudent]=useState([]);
// // // //     const Add=()=>{
// // // //         let newStudent={
// // // //             name:name,
// // // //             Cgpa:Cgpa,
// // // //             Regno:Regno,
// // // //             Section:Section
// // // //         }
// // // //         setStudent([...student,newStudent])
// // // //         Alert.alert("Student Added Successfully to List")
// // // //         }
// // // //     const find=()=>{
// // // //         let foundStudent=student.find((s)=>s.name==name)
// // // //         if(foundStudent){
// // // //             Alert.alert("Student found in List")
// // // //         }else{
// // // //             Alert.alert("Student not found in list")
// // // //         }
// // // //     }
// // // //     const filter=()=>{
// // // //         let filteredStudents=student.filter((s)=>s.Cgpa>2.5)
// // // //         if(filteredStudents.length>0){
// // // //             Alert.alert("Students with cgpa greater than 2.5 found in list")
// // // //         }else{
// // // //             Alert.alert("No students with cgpa greater than 2.5 found in list")
// // // //         }
    
// // // //     }
// // // //     return(
// // // //         <View style={{flex:1}}>
// // // //             <Text>Name:</Text>
// // // //             <View>
// // // //                 <TextInput style={{margin:20,padding:20,borderWidth:20,borderRadius:20}}
// // // //                 placeholder="Enter Name"
// // // //                 onChangeText={setName}
// // // //                 value={name}/>
// // // //             </View>
// // // //             <Text>Cgpa:</Text>
// // // //             <View>
// // // //                 <TextInput style={{margin:20,padding:20,borderWidth:20,borderRadius:20}}
// // // //                 placeholder="Enter cgpa"
// // // //                 onChangeText={setCgpa}
// // // //                 value={Cgpa}/>
// // // //             </View>
// // // //             <Text>RegNo:</Text>
// // // //             <View>
// // // //                 <TextInput style={{margin:20,padding:20,borderWidth:20,borderRadius:20}}
// // // //                 placeholder="Enter RegNo"
// // // //                 onChangeText={setRegno}
// // // //                 value={Regno}/>
// // // //             </View>
// // // //             <Text>Section:</Text>
// // // //             <View>
// // // //                 <TextInput style={{margin:20,padding:20,borderWidth:20,borderRadius:20}}
// // // //                 placeholder="Enter Section"
// // // //                 onChangeText={setSection}
// // // //                 value={Section}/>
// // // //             </View>
// // // //             <View style={{alignSelf:'center'}}>
// // // //             <Button onPress={Add}
// // // //             title="ADD"
// // // //             />
// // // //             <Button onPress={find}
// // // //             title="Find"
// // // //             />
// // // //             <Button onPress={filter}
// // // //             title="Filter"
// // // //             />
// // // //             </View>

// // // //         </View>
        
        
// // // //     )
// // // // }
// // // // export default App;


// // // import React, { useState } from "react";
// // // import { View, Text, TouchableOpacity, Alert } from "react-native";
// // // import { Checkbox, RadioButton } from "react-native-paper";

// // // const AddEmployee = () => {
// // //   const [gender, setGender] = useState('Male');
// // //   const [married, setMarried] = useState(true);
// // //   const [muslim, setMuslim] = useState(true);

// // //   return (
// // //     <View style={{ padding: 20 }}>
// // //       {/* Header */}
// // //       <View style={{ backgroundColor: 'purple', marginTop: 40, borderRadius: 10 }}>
// // //         <Text style={{
// // //           fontSize: 35, color: 'white', textAlign: 'center', padding: 20,
// // //         }}>Employee SignUP</Text>
// // //       </View>

// // //       {/* Gender Radio Buttons */}
// // //       <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
// // //         <RadioButton
// // //           value="Male"
// // //           status={gender === 'Male' ? 'checked' : 'unchecked'}
// // //           onPress={() => setGender('Male')}
// // //         />
// // //         <Text style={{ fontSize: 30 }}>Male</Text>
// // //       </View>
// // //       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
// // //         <RadioButton
// // //           value="Female"
// // //           status={gender === 'Female' ? 'checked' : 'unchecked'}
// // //           onPress={() => setGender('Female')}
// // //         />
// // //         <Text style={{ fontSize: 30 }}>Female</Text>
// // //       </View>

// // //       {/* Show Gender Button */}
// // //       <TouchableOpacity
// // //         onPress={() => Alert.alert('Selected Gender', gender)}
// // //         style={{
// // //           backgroundColor: 'green',
// // //           padding: 10,
// // //           marginVertical: 20,
// // //           borderRadius: 5,
// // //         }}>
// // //         <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }}>
// // //           Show Gender
// // //         </Text>
// // //       </TouchableOpacity>

// // //       {/* Married Checkbox */}
// // //       <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
// // //         <Checkbox
// // //           status={married ? 'checked' : 'unchecked'}
// // //           onPress={() => setMarried(!married)}
// // //         />
// // //         <Text style={{ fontSize: 30 }}>Married</Text>
// // //       </View>

// // //       {/* Muslim Checkbox */}
// // //       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
// // //         <Checkbox
// // //           status={muslim ? 'checked' : 'unchecked'}
// // //           onPress={() => setMuslim(!muslim)}
// // //         />
// // //         <Text style={{ fontSize: 30 }}>Muslim</Text>
// // //       </View>
// // //     </View>
// // //   );
// // // }

// // // export default AddEmployee;
// // // import React, { useState } from "react";
// // // import { Alert, Button, FlatList, Text, TouchableOpacity, View } from "react-native";

// // // const EmpForm = () => {
// // //     const [emp, setEmp] = useState([
// // //         'Amir', 'Zain', 'Ayehsa', 'Zahid', 'Amna'
// // //     ]);

// // //     const [students, setStudents] = useState([
// // //         { regNo: 295, name: 'Usaid', CGPA: 3.3 },
// // //         { regNo: 195, name: 'Abdul', CGPA: 2.7 },
// // //         { regNo: 205, name: 'Kashif', CGPA: 9.0 },
// // //         { regNo: 190, name: 'Ayesha', CGPA: 15.0 },
// // //         { regNo: 285, name: 'Meesum', CGPA: 3.6 },
// // //     ]);

// // //     const delStudents = (reg) => {
// // //         const newData = students.filter(s => s.regNo != reg);
// // //         setStudents(newData)
// // //     }
// // //     const showStudents = ({ item }) => {
// // //         return (
// // //             <View style={{
// // //                 borderWidth: 2, borderRadius: 10, margin: 5,
// // //                 flexDirection: 'row', flex: 1,
// // //             }}>
// // //                 <View style={{ flex: 4, backgroundColor: 'yellow' }}>
// // //                     <Text style={{ fontSize: 30, }}>RegNo:{item.regNo}</Text>
// // //                     <Text style={{ fontSize: 30, }}>Name:{item.name}</Text>
// // //                     <Text style={{ fontSize: 30, }}>CGPA:{item.CGPA}</Text>
// // //                 </View>
// // //                 <TouchableOpacity
// // //                     style={{
// // //                         flex: 1, backgroundColor: 'red',
// // //                         justifyContent: 'center',
// // //                     }}
// // //                     onPress={() => delStudents(item.regNo)}>
// // //                     <View>
// // //                         <Text style={{
// // //                             color: 'white',
// // //                             textAlign: 'center', fontSize: 25, fontWeight: 'bold'
// // //                         }}>Delete</Text>
// // //                     </View>
// // //                 </TouchableOpacity>
// // //             </View>
// // //         );
// // //     }


// // //     const showEmployees = ({ item }) => {
// // //         return (
// // //             <View>
// // //                 <Text style={{ fontSize: 30, textAlign: 'center' }}>
// // //                     Name : {item}
// // //                 </Text>
// // //             </View>
// // //         );
// // //     }

// // //     return (
// // //         <View style={{ flex: 1 }}>
// // //             <View style={{
// // //                 backgroundColor: 'purple', marginTop: 40,
// // //                 padding: 10,
// // //             }}>
// // //                 <Text style={{ fontSize: 35, color: 'white', textAlign: 'center' }}> Employe</Text>
// // //             </View>
// // //             <View>
// // //                 <FlatList
// // //                     data={students}
// // //                     renderItem={showStudents}
// // //                 />
// // //             </View>
// // //         </View>
// // //     );
// // // }
// // // export default EmpForm;
// // import React ,{useState} from "react";
// // import { Text, View } from "react-native";
// // import { TextInput } from "react-native-paper";





// // const salarycalculator=()=>{
// //     const [salary,setsalary]=useState('')
// // const[tax,settax]=useState('')
// // const[netsalary,setanetsalary]=useState('')
// // return(
// //     <View>
// //         <Text>Yearly Salary Calculator  </Text>
// //         <view>
// //             <TextInput>Enter montly salary</TextInput>
// //         </view>
// //     </View>
// // )


// // }
// // export default salarycalculator;
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet
// } from 'react-native';

// export default function App() {

//   const [monthlySalary, setMonthlySalary] = useState('');
//   const [bonus, setBonus] = useState('');
//   const [yearlySalary, setYearlySalary] = useState(0);
//   const [tax, setTax] = useState(0);
//   const [netSalary, setNetSalary] = useState(0);

//   const calculateSalary = () => {

//     const salary = parseFloat(monthlySalary) || 0;
//     const bonusAmount = parseFloat(bonus) || 0;

//     const yearly = salary * 12 + bonusAmount;
//     const taxAmount = yearly * 0.10;
//     const net = yearly - taxAmount;

//     setYearlySalary(yearly);
//     setTax(taxAmount);
//     setNetSalary(net);
//   };

//   const clearFields = () => {
//     setMonthlySalary('');
//     setBonus('');
//     setYearlySalary(0);
//     setTax(0);
//     setNetSalary(0);
//   };

//   return (
//     <View style={styles.container}>

//       <Text style={styles.title}>Yearly Salary Calculator</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Monthly Salary"
//         keyboardType="numeric"
//         value={monthlySalary}
//         onChangeText={setMonthlySalary}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Enter Bonus"
//         keyboardType="numeric"
//         value={bonus}
//         onChangeText={setBonus}
//       />

//       <TouchableOpacity style={styles.button} onPress={calculateSalary}>
//         <Text style={styles.buttonText}>CALCULATE SALARY</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={clearFields}>
//         <Text style={styles.buttonText}>CLEAR</Text>
//       </TouchableOpacity>

//       <View style={styles.resultBox}>
//         <Text style={styles.result}>Yearly Salary: {yearlySalary}</Text>
//         <Text style={styles.result}>Tax: {tax}</Text>
//         <Text style={styles.result}>Net Salary: {netSalary}</Text>
//       </View>

//     </View>
//   );
// }

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#fff'
//   },

//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 40
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 20,
//     fontSize: 16
//   },

//   button: {
//     backgroundColor: '#2d8fdd',
//     padding: 15,
//     borderRadius: 6,
//     marginBottom: 15,
//     alignItems: 'center'
//   },

//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold'
//   },

//   resultBox: {
//     marginTop: 20
//   },

//   result: {
//     fontSize: 18,
//     marginBottom: 10
//   }

// });
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {RadioButton, Checkbox} from 'react-native-paper';

export default function App() {

  const [quantity, setQuantity] = useState('');
  const [product, setProduct] = useState('regular');
  const [discount, setDiscount] = useState(false);
  const [total, setTotal] = useState(0);

  const calculatePrice = () => {

    let price = 0;

    if(product === 'regular'){
      price = 100;
    } else {
      price = 200;
    }

    let qty = parseInt(quantity) || 0;
    let totalPrice = price * qty;

    if(discount){
      totalPrice = totalPrice * 0.9;
    }

    setTotal(totalPrice);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Order Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <Text style={styles.label}>Select Product</Text>

      <View style={styles.row}>
        <RadioButton
          value="regular"
          status={product === 'regular' ? 'checked' : 'unchecked'}
          onPress={() => setProduct('regular')}
        />
        <Text>Regular (100)</Text>
      </View>

      <View style={styles.row}>
        <RadioButton
          value="premium"
          status={product === 'premium' ? 'checked' : 'unchecked'}
          onPress={() => setProduct('premium')}
        />
        <Text>Premium (200)</Text>
      </View>

      <View style={styles.row}>
        <Checkbox
          status={discount ? 'checked' : 'unchecked'}
          onPress={() => setDiscount(!discount)}
        />
        <Text>Apply 10% Discount</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={calculatePrice}>
        <Text style={styles.buttonText}>CALCULATE</Text>
      </TouchableOpacity>

      <Text style={styles.result}>Total Price: {total}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    padding:20,
    backgroundColor:'#fff'
  },

  title:{
    fontSize:22,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20
  },

  input:{
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:6,
    padding:12,
    marginBottom:20
  },

  label:{
    fontSize:16,
    marginBottom:10
  },

  row:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10
  },

  button:{
    backgroundColor:'#2d8fdd',
    padding:12,
    alignItems:'center',
    borderRadius:5,
    marginTop:15
  },

  buttonText:{
    color:'#fff',
    fontWeight:'bold'
  },

  result:{
    marginTop:20,
    fontSize:18,
    fontWeight:'bold'
  }

});