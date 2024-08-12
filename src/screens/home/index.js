// import React from 'react';
// import styles from './styles';
// import { useNavigation, useRoute } from '@react-navigation/native'
// import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

// export default function Home(){

//     const route = useRoute();
//     const navigation = useNavigation();

//     return(
        import * as React from 'react';
        import { Text, View } from 'react-native';
        import { NavigationContainer } from '@react-navigation/native';
        import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
        
        function HomeScreen() {
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Home!</Text>
            </View>
          );
        }
        
        function SettingsScreen() {
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Settings!</Text>
            </View>
          );
        }
        
        const Tab = createBottomTabNavigator();
        
        function MyTabs() {
          return (
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          );
        }
        
        export default function App() {
          return (

              <MyTabs />
          
          );
        }
        
//       <ScrollView>
// <View style={{ flex: 1, backgroundColor: '#050521' }}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('../../assets/logo.png')}
//           style={styles.logo}
//           alt="Sua Empresa"
//         />
//         <Text style={styles.title}>Entre na sua conta</Text>
//       </View>

//       <View style={styles.formContainer}>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Endereço de email</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             autoComplete="email"
//             required
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <View style={styles.passwordContainer}>
//             <Text style={styles.label}>Senha</Text>
//             <TouchableOpacity onPress={() => navigation.navigate('EsqueceuSenha')}>
//               <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
//             </TouchableOpacity>
//           </View>
//           <TextInput
//             style={styles.input}
//             placeholder="Senha"
//             secureTextEntry={true}
//             autoComplete="current-password"
//             required
//           />
//         </View>

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Entrar</Text>
//         </TouchableOpacity>

//         <Text style={styles.footerText}>
//           Não é membro?{' '}
//           <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
//             <Text style={{color:'white'}}>Cadastre-se</Text>
//           </TouchableOpacity>
//         </Text>
//       </View>
//     </View>
//     </ScrollView>
//     );
// }