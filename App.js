
// // import React, { useState } from "react";
// // import { Alert, Button, FlatList, Text, TextInput, View } from "react-native";

// // // const App = () => {
// // //   const [name, setName] = useState("");
// // //   const [salary, setSalary] = useState("");
// // //   const [empID, setEmpID] = useState(101);
// // //   const [employees, setEmployees] = useState([]);

// // //   const addEmployee = () => {
// // //     if (!name || !salary) {
// // //       Alert.alert("Please fill all fields");
// // //       return;
// // //     }

// // //     let emp = { empID, name, salary };

// // //     // ✅ correct state update
// // //     setEmployees([...employees, emp]);

// // //     setEmpID(empID + 1);
// // //     setName("");
// // //     setSalary("");
// // //   };

// // //   const showEmp = () => {
// // //     const data = employees.find(e => e.name === name);
// // //     if (data)
// // //       Alert.alert(`Name: ${data.name}\nSalary: ${data.salary}`);
// // //     else
// // //       Alert.alert("Not Found");
// // //   };

// // //   return (
// // //     <View style={{ flex: 1 }}>
// // //       <Text style={{ fontSize: 40, textAlign: "center" }}>
// // //         Employee Form
// // //       </Text>

// // //       <TextInput
// // //         placeholder="Enter Name"
// // //         value={name}
// // //         onChangeText={setName}
// // //         style={{
// // //           borderWidth: 2,
// // //           fontSize: 25,
// // //           margin: 10,
// // //           padding: 10,
// // //           borderRadius: 10,
// // //         }}
// // //       />

// // //       <TextInput
// // //         placeholder="Enter Salary"
// // //         value={salary}
// // //         onChangeText={setSalary}
// // //         keyboardType="numeric"
// // //         style={{
// // //           borderWidth: 2,
// // //           fontSize: 25,
// // //           margin: 10,
// // //           padding: 10,
// // //           borderRadius: 10,
// // //         }}
// // //       />

// // //       <View style={{ width: "50%", alignSelf: "center", margin: 10 }}>
// // //         <Button title="ADD" onPress={addEmployee} />
// // //       </View>

// // //       <View style={{ width: "50%", alignSelf: "center", margin: 10 }}>
// // //         <Button title="Show" onPress={showEmp} />
// // //       </View>

// // //       <FlatList
// // //         data={employees}
// // //         keyExtractor={(item) => item.empID.toString()}
// // //         renderItem={({ item }) => (
// // //           <Text style={{ fontSize: 25, borderWidth: 2, margin: 10 }}>
// // //             {item.empID} | {item.name} | {item.salary}
// // //           </Text>
// // //         )}
// // //       />
// // //     </View>
// // //   );
// // // };

// // // export default App;
// // const App=()=>{
// //     const[name,setName]=useState('');
// //     const[Cgpa,setCgpa]=useState('');
// //     const[Regno,setRegno]=useState('');
// //     const[Section,setSection]=useState('');
// //     const[student,setStudent]=useState([]);
// //     const Add=()=>{
// //         let newStudent={
// //             name:name,
// //             Cgpa:Cgpa,
// //             Regno:Regno,
// //             Section:Section
// //         }
// //         setStudent([...student,newStudent])
// //         Alert.alert("Student Added Successfully to List")
// //         }
// //     const find=()=>{
// //         let foundStudent=student.find((s)=>s.name==name)
// //         if(foundStudent){
// //             Alert.alert("Student found in List")
// //         }else{
// //             Alert.alert("Student not found in list")
// //         }
// //     }
// //     const filter=()=>{
// //         let filteredStudents=student.filter((s)=>s.Cgpa>2.5)
// //         if(filteredStudents.length>0){
// //             Alert.alert("Students with cgpa greater than 2.5 found in list")
// //         }else{
// //             Alert.alert("No students with cgpa greater than 2.5 found in list")
// //         }
    
// //     }
// //     return(
// //         <View style={{flex:1}}>
// //             <Text>Name:</Text>
// //             <View>
// //                 <TextInput style={{margin:20,padding:20,borderWidth:20,borderRadius:20}}
// //                 placeholder="Enter Name"
// //                 onChangeText={setName}
// //                 value={name}/>
// //             </View>
// //             <Text>Cgpa:</Text>
// //             <View>
// //                 <TextInput style={{margin:20,padding:20,borderWidth:20,borderRadius:20}}
// //                 placeholder="Enter cgpa"
// //                 onChangeText={setCgpa}
// //                 value={Cgpa}/>
// //             </View>
// //             <Text>RegNo:</Text>
// //             <View>
// //                 <TextInput style={{margin:20,padding:20,borderWidth:20,borderRadius:20}}
// //                 placeholder="Enter RegNo"
// //                 onChangeText={setRegno}
// //                 value={Regno}/>
// //             </View>
// //             <Text>Section:</Text>
// //             <View>
// //                 <TextInput style={{margin:20,padding:20,borderWidth:20,borderRadius:20}}
// //                 placeholder="Enter Section"
// //                 onChangeText={setSection}
// //                 value={Section}/>
// //             </View>
// //             <View style={{alignSelf:'center'}}>
// //             <Button onPress={Add}
// //             title="ADD"
// //             />
// //             <Button onPress={find}
// //             title="Find"
// //             />
// //             <Button onPress={filter}
// //             title="Filter"
// //             />
// //             </View>

// //         </View>
        
        
// //     )
// // }
// // export default App;


// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Alert } from "react-native";
// import { Checkbox, RadioButton } from "react-native-paper";

// const AddEmployee = () => {
//   const [gender, setGender] = useState('Male');
//   const [married, setMarried] = useState(true);
//   const [muslim, setMuslim] = useState(true);

//   return (
//     <View style={{ padding: 20 }}>
//       {/* Header */}
//       <View style={{ backgroundColor: 'purple', marginTop: 40, borderRadius: 10 }}>
//         <Text style={{
//           fontSize: 35, color: 'white', textAlign: 'center', padding: 20,
//         }}>Employee SignUP</Text>
//       </View>

//       {/* Gender Radio Buttons */}
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//         <RadioButton
//           value="Male"
//           status={gender === 'Male' ? 'checked' : 'unchecked'}
//           onPress={() => setGender('Male')}
//         />
//         <Text style={{ fontSize: 30 }}>Male</Text>
//       </View>
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <RadioButton
//           value="Female"
//           status={gender === 'Female' ? 'checked' : 'unchecked'}
//           onPress={() => setGender('Female')}
//         />
//         <Text style={{ fontSize: 30 }}>Female</Text>
//       </View>

//       {/* Show Gender Button */}
//       <TouchableOpacity
//         onPress={() => Alert.alert('Selected Gender', gender)}
//         style={{
//           backgroundColor: 'green',
//           padding: 10,
//           marginVertical: 20,
//           borderRadius: 5,
//         }}>
//         <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }}>
//           Show Gender
//         </Text>
//       </TouchableOpacity>

//       {/* Married Checkbox */}
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
//         <Checkbox
//           status={married ? 'checked' : 'unchecked'}
//           onPress={() => setMarried(!married)}
//         />
//         <Text style={{ fontSize: 30 }}>Married</Text>
//       </View>

//       {/* Muslim Checkbox */}
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//         <Checkbox
//           status={muslim ? 'checked' : 'unchecked'}
//           onPress={() => setMuslim(!muslim)}
//         />
//         <Text style={{ fontSize: 30 }}>Muslim</Text>
//       </View>
//     </View>
//   );
// }

// export default AddEmployee;
import React, { useState } from "react";
import { Alert, Button, FlatList, Text, TouchableOpacity, View } from "react-native";

const EmpForm = () => {
    const [emp, setEmp] = useState([
        'Amir', 'Zain', 'Ayehsa', 'Zahid', 'Amna'
    ]);

    const [students, setStudents] = useState([
        { regNo: 295, name: 'Usaid', CGPA: 3.3 },
        { regNo: 195, name: 'Abdul', CGPA: 2.7 },
        { regNo: 205, name: 'Kashif', CGPA: 9.0 },
        { regNo: 190, name: 'Ayesha', CGPA: 15.0 },
        { regNo: 285, name: 'Meesum', CGPA: 3.6 },
    ]);

    const delStudents = (reg) => {
        const newData = students.filter(s => s.regNo != reg);
        setStudents(newData)
    }
    const showStudents = ({ item }) => {
        return (
            <View style={{
                borderWidth: 2, borderRadius: 10, margin: 5,
                flexDirection: 'row', flex: 1,
            }}>
                <View style={{ flex: 4, backgroundColor: 'yellow' }}>
                    <Text style={{ fontSize: 30, }}>RegNo:{item.regNo}</Text>
                    <Text style={{ fontSize: 30, }}>Name:{item.name}</Text>
                    <Text style={{ fontSize: 30, }}>CGPA:{item.CGPA}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        flex: 1, backgroundColor: 'red',
                        justifyContent: 'center',
                    }}
                    onPress={() => delStudents(item.regNo)}>
                    <View>
                        <Text style={{
                            color: 'white',
                            textAlign: 'center', fontSize: 25, fontWeight: 'bold'
                        }}>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }


    const showEmployees = ({ item }) => {
        return (
            <View>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>
                    Name : {item}
                </Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                backgroundColor: 'purple', marginTop: 40,
                padding: 10,
            }}>
                <Text style={{ fontSize: 35, color: 'white', textAlign: 'center' }}> Employe</Text>
            </View>
            <View>
                <FlatList
                    data={students}
                    renderItem={showStudents}
                />
            </View>
        </View>
    );
}
export default EmpForm;
