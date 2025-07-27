import React, { useState, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Optional: expo vector icons
import {
  View, Text, FlatList, TouchableOpacity, StyleSheet,
  Image, TextInput, ScrollView
} from 'react-native';
const SettingsScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi! How can I help you today?', sender: 'agent' },
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      // Add the user's message
      const newUserMessage = { id: Date.now(), text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInput('');

      // Simulate AI Response
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          text: generateAIResponse(),
          sender: 'agent',
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000); // Simulate a delay for AI response (1 second)
    }
  };

  // Simple AI response generator
  const generateAIResponse = () => {
    const responses = [
      'How can I assist you further?',
      'Can you provide more details about your issue?',
      'I’m here to help! What else can I do for you?',
      'Please let me know what you need assistance with.',
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const userInfo = {
    username: 'admin',
    email: 'admin@example.com',
    registeredOn: 'Jan 1, 2024',
  };

  const handleEmailSupport = () => {
    Linking.openURL('mailto:support@phonestore.com');
  };

  const handleCallSupport = () => {
    Linking.openURL('tel:+18001234567');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* 👤 Account Section */}
      <View style={styles.settingCard}>
        <Text style={styles.cardTitle}>Account Info</Text>
        <View style={styles.infoRow}>
          <Ionicons name="person-circle" size={20} color="#007bff" />
          <Text style={styles.cardText}>Username: {userInfo.username}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="mail" size={20} color="#007bff" />
          <Text style={styles.cardText}>Email: {userInfo.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="calendar" size={20} color="#007bff" />
          <Text style={styles.cardText}>Joined: {userInfo.registeredOn}</Text>
        </View>
      </View>

      {/* Chat Bubble Section */}
      <View style={styles.chatSection}>
        <Text style={styles.cardTitle}>Customer Support Chat</Text>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.chatBubble,
                item.sender === 'user' ? styles.userBubble : styles.agentBubble,
              ]}
            >
              <Text style={styles.chatText}>{item.text}</Text>
            </View>
          )}
        />
        <View style={styles.chatInputContainer}>
          <TextInput
            placeholder="Type a message..."
            value={input}
            onChangeText={setInput}
            style={styles.chatInput}
          />
          <TouchableOpacity onPress={handleSendMessage} style={styles.sendBtn}>
            <Text style={{ color: '#fff' }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Customer Support Section */}
      <View style={styles.settingCard}>
        <Text style={styles.cardTitle}>Customer Support</Text>
        <TouchableOpacity onPress={handleCallSupport} style={styles.infoRow}>
          <Ionicons name="call" size={20} color="#28a745" />
          <Text style={styles.cardText}>Call: +1 (800) 123-4567</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEmailSupport} style={styles.infoRow}>
          <Ionicons name="mail-open" size={20} color="#28a745" />
          <Text style={styles.cardText}>Email: support@phonestore.com</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi! How can I help you today?', sender: 'agent' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Live Chat Support</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.chatBubble,
              item.sender === 'user' ? styles.userBubble : styles.agentBubble,
            ]}
          >
            <Text style={styles.chatText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.chatInputContainer}>
        <TextInput
          placeholder="Type a message..."
          value={input}
          onChangeText={setInput}
          style={styles.chatInput}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendBtn}>
          <Text style={{ color: '#fff' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const Stack = createStackNavigator();
const CartContext = createContext();
const AuthContext = createContext();
<Stack.Screen name="Chat" component={ChatScreen} />


const phones = [
  {
    id: '1',
    model: 'iPhone 14',
    price: 999,
    image: 'https://th.bing.com/th/id/OIP.U0HlvkjrPFnwsZzTts8QBgHaEK',
  
    description: 'Super Retina XDR display, A15 Bionic chip, and exceptional camera performance.',
    rating: 4.5,
     additionalImages: [
    "https://media.ldlc.com/r1600/ld/products/00/05/97/75/LD0005977505_0005977525.jpg",
    "https://shotkit.com/wp-content/uploads/bb-plugin/cache/victor-serban-H-mzalaeXYU-unsplash-landscape-dee0b8b58df5b84c493374dd9d455691-uz4ikceatsy9.jpg","https://9to5mac.com/wp-content/uploads/sites/6/2022/09/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.medium_2x.jpg?resize=1098"
 
  ]
}
  ,
  {
    id: '2',
    model: 'Samsung Galaxy S23',
    price: 899,
    image: 'https://th.bing.com/th?q=Samsung+Galaxy+S23+Back',
    description: 'Dynamic AMOLED display, Snapdragon 8 Gen 2 chip, great battery life.',
    rating: 4.7,
  additionalImages: [
    "https://media.4rgos.it/i/Argos/1488092_R_Z001A?w=1500&h=880&qlt=70&fmt=webp",
    "https://m.media-amazon.com/images/I/61VfL-aiToL._SL1500_.jpg",
    "https://th.bing.com/th/id/OIP.0vrxFXj02iJgXhzZapx6swHaER?w=275&h=180&c=7&r=0&o=5&dpr=2&pid=1.7"
  ]
}
  ,
  {
    id: '3',
    model: 'Google Pixel 7',
    price: 799,
    image: 'https://th.bing.com/th?q=Google+Pixel+7+Box',
    description: 'Pure Android, excellent camera, Tensor G2 chip, sleek design.',
    rating: 4.2,
  additionalImages: [
    "https://tse3.mm.bing.net/th/id/OIP.e5z5320BbHvnTcAv1KW2XQHaHa?rs=1&pid=ImgDetMain",
    "https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/Untitled7022.jpg",
    "https://cdn.mos.cms.futurecdn.net/F85q7qsa6vMEwpU7VzZ53b.jpg"
  ]
}
  ,
  {
    id: '4',
    model: 'OnePlus 11',
    price: 749,
    image: 'https://th.bing.com/th?id=OIP.yGZMlQV3gVCDOlOEf6rAGwHaF5',
    description: 'AMOLED 120Hz display, Snapdragon 8 Gen 2, fast charging.',
    rating: 4.4,
  additionalImages: [
    "https://example.com/s23-1.jpg",
    "https://example.com/s23-2.jpg"
  ]
}
  ,
  {
    id: '5',
    model: 'Xiaomi 13',
    price: 699,
    image: 'https://th.bing.com/th/id/OIP.HLL8xt7q2lt-gYMPL9kxKAHaFj',
    description: 'Snapdragon 8 Gen 2, 120Hz display, amazing value.',
    rating: 4.6,
  additionalImages: [
    "https://example.com/s23-1.jpg",
    "https://example.com/s23-2.jpg"
  ]
}
  ,
  {
    id: '6',
    model: 'LG Velvet',
    price: 650,
    image: 'https://th.bing.com/th?id=OIP.35JG7WuKeXj-SIZAh_7jmQHaFj',
    description: 'Sleek design, 48MP camera, OLED display, 5G support.',
    rating: 4.1,
  additionalImages: [
    "https://example.com/s23-1.jpg",
    "https://example.com/s23-2.jpg"
  ]
}
  ,
];

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState({});

  const addToCart = (phone) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === phone.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === phone.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...phone, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const increaseQty = (id) => setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  const decreaseQty = (id) => setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0));
  const toggleFavorite = (id) => setFavorites(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQty, decreaseQty, favorites, toggleFavorite }}>
      {children}
    </CartContext.Provider>
  );
};

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const LoginScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
      navigation.navigate('Home');
    } else {
      alert('Invalid credentials. Try admin / 1234');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.searchInput} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.searchInput} />
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.link}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password === confirmPassword) {
      alert('Account created successfully!');
      navigation.navigate('Login');
    } else {
      alert('Passwords do not match.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.searchInput} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.searchInput} />
      <TextInput placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry style={styles.searchInput} />
      <TouchableOpacity onPress={handleSignUp} style={styles.btn}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.link}>
        <Text style={styles.linkText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const { cart, addToCart, favorites, toggleFavorite } = useContext(CartContext);
  const { setIsLoggedIn } = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const filteredPhones = phones.filter(phone => phone.model.toLowerCase().includes(search.toLowerCase()));

  const handleLogout = () => {
  setIsLoggedIn(false);
  navigation.replace('Login');
};
// In your AuthProvider component
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Clear auth state when logging out
  const logout = () => {
    setIsLoggedIn(false);
  };
  navigation.dispatch(
  CommonActions.reset({
    index: 0,
    routes: [{ name: 'Login' }],
  })
);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


  // 👉 Set the Settings button in the header
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ marginRight: 20 }}>
          <Text style={{ fontSize: 13, color: '#007bff' }}>Settings</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

 return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Phone Store</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogout}>
          <Text style={styles.loginText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <TextInput placeholder="Search phones..." value={search} onChangeText={setSearch} style={styles.searchInput} />
      <FlatList
        data={filteredPhones}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', { phone: item })}>
            <Image source={{ uri: item.image }} style={styles.phoneImage} />
            <View style={{ flex: 2 }}>
              <Text style={styles.model}>{item.model}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
            <View style={styles.ratingAndFavorite}>
              <Text style={styles.rating}>Rating: {item.rating} ⭐</Text>
              <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteBtn}>
                <Text style={{ fontSize: 18 }}>{favorites[item.id] ? '❤️' : '🤍'}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => addToCart(item)} style={styles.smallCartBtn}>
              <Text style={styles.cartBtnText}>Add to Cart</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cartMainBtn}>
        <Text style={styles.cartText}>Go to Cart ({cart.length})</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailsScreen = ({ route, navigation }) => {
  const { phone } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: phone.image }} style={styles.detailsImage} />
      <Text style={styles.detailsModel}>{phone.model}</Text>
      <Text style={styles.detailsDescription}>{phone.description}</Text>
      <Text style={styles.detailsPrice}>${phone.price}</Text>
      <Text style={styles.detailsRating}>Rating: {phone.rating} ⭐</Text>

      {/* Gallery of additional images */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageGallery}>
        {phone.additionalImages.map((imgUrl, index) => (
          <Image key={index} source={{ uri: imgUrl }} style={styles.galleryImage} />
        ))}
      </ScrollView>

      <TouchableOpacity onPress={() => addToCart(phone)} style={styles.btn}>
        <Text style={styles.btnText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Go to Cart button */}
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.cartMainBtn}>
        <Text style={styles.cartText}>Go to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};





const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  const handleProceed = () => {
    navigation.navigate('Checkout');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Details', { phone: item })}>
                <View style={styles.cartItem}>
                  <Image source={{ uri: item.image }} style={styles.cartImage} />
                  <View style={styles.cartItemInfo}>
                    <Text style={styles.cartItemText}>{item.model}</Text>
                    <Text style={styles.cartItemText}>${item.price}</Text>
                    <Text style={styles.cartItemDesc}>{item.description}</Text> {/* ADDED DESCRIPTION */}
                    <View style={styles.row}>
                      <TouchableOpacity onPress={() => decreaseQty(item.id)} style={styles.qtyBtn}>
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text>{item.quantity}</Text>
                      <TouchableOpacity onPress={() => increaseQty(item.id)} style={styles.qtyBtn}>
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeBtn}>
                    <Text style={styles.removeBtnText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={handleProceed} style={styles.proceedBtn}>
            <Text style={styles.proceedText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};


const CheckoutScreen = ({ navigation }) => {
  const { cart } = useContext(CartContext);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card'); // track selected payment method

  const handlePayment = () => {
    if (paymentMethod === 'card') {
      if (cardNumber && expiryDate && cvv) {
        alert('Card payment successful! Order placed.');
        navigation.navigate('Home');
      } else {
        alert('Please fill in all card payment details.');
      }
    } else if (paymentMethod === 'paypal') {
      if (paypalEmail) {
        alert(`PayPal payment successful! Order placed.`);
        navigation.navigate('Home');
      } else {
        alert('Please provide a valid PayPal email.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Total Amount: ${totalAmount.toFixed(2)}</Text>

      {/* Cart details section */}
      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={{ uri: item.image }} style={styles.cartImage} />
              <View style={styles.cartItemInfo}>
                <Text style={styles.cartItemText}>{item.model}</Text>
                <Text style={styles.cartItemText}>${item.price}</Text>
                <Text style={styles.cartItemText}>Quantity: {item.quantity}</Text>
              </View>
            </View>
          )}
        />
      )}

      {/* Payment method selector */}
      <Text style={styles.header}>Choose Payment Method</Text>
      <TouchableOpacity
        onPress={() => setPaymentMethod('card')}
        style={[styles.paymentBtn, paymentMethod === 'card' && styles.selectedPayment]}
      >
        <Image
          source={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.hi2vtWZCqTJG9Qy0ccjeRwHaFj?rs=1&pid=ImgDetMain' }} // Visa logo
          style={styles.paymentLogo}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPaymentMethod('paypal')}
        style={[styles.paymentBtn, paymentMethod === 'paypal' && styles.selectedPayment]}
      >
        <Image
          source={{ uri: 'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg' }} // PayPal logo URL
          style={styles.paymentLogo}
        />
      </TouchableOpacity>

      {/* Card payment details section */}
      {paymentMethod === 'card' && (
        <>
          <Text style={styles.header}>Card Payment</Text>
          <View style={styles.cardLogoContainer}>
            <Image
              source={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.3cPtDknzyQg1giVfmYHecAHaCS?rs=1&pid=ImgDetMain' }} // Visa logo
              style={styles.cardLogo}
            />
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png' }} // MasterCard logo
              style={styles.cardLogo}
            />
          </View>
          <TextInput
            placeholder="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
            style={styles.searchInput}
          />
          <TextInput
            placeholder="MM/YY (Expiry)"
            value={expiryDate}
            onChangeText={setExpiryDate}
            keyboardType="numeric"
            style={styles.searchInput}
          />
          <TextInput
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            secureTextEntry
            keyboardType="numeric"
            style={styles.searchInput}
          />
        </>
      )}

      {/* PayPal payment section */}
      {paymentMethod === 'paypal' && (
        <>
          <Text style={styles.header}>PayPal Details</Text>
          <View style={styles.paypalContainer}>
            <Image
              source={{ uri: 'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg' }} // PayPal logo URL
              style={styles.paypalLogo}
            />
            <TextInput
              placeholder="PayPal Email"
              value={paypalEmail}
              onChangeText={setPaypalEmail}
              keyboardType="email-address"
              style={styles.searchInput}
            />
          </View>
          <Text style={{ marginTop: 15 }}>
            You will be redirected to PayPal to complete your payment after confirming your details.
          </Text>
        </>
      )}

      {/* Payment button */}
      <TouchableOpacity onPress={handlePayment} style={styles.btn}>
        <Text style={styles.btnText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CartProvider>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </Stack.Navigator>
        </CartProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingCard: {
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  chatSection: {
    marginBottom: 20,
  },
  chatBubble: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '75%',
  },
  userBubble: {
    backgroundColor: '#007bff',
    alignSelf: 'flex-end',
  },
  agentBubble: {
    backgroundColor: '#f0f0f0',
    alignSelf: 'flex-start',
  },
  chatText: {
    color: '#fff',
    fontSize: 16,
  },
  chatInputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  chatInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 10,
  },
  sendBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  galleryImage: {
  width: 250, // You can adjust the width based on your preference
  height: 250, // Adjust height as well for the images
  marginRight: 10, // Space between images
  borderRadius: 8,
  resizeMode: 'cover', // This ensures the images cover the available space
},

  paymentLogo: {
  width: 100,
  height: 40,
  resizeMode: 'contain',
},
paymentBtn: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
  marginVertical: 5,
  backgroundColor: '#f0f0f0',
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#ccc',
},
detailsImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  detailsModel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  detailsDescription: {
    fontSize: 12,
    color: '#666',
    marginVertical: 5,
  },
  detailsPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  detailsRating: {
    fontSize: 16,
    color: '#888',
    marginTop: 8,
  },
  imageGallery: {
    marginTop: 16,
    marginBottom: 16,
  },
 
  btn: {
    backgroundColor: '#ff6600',
    padding: 15,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  cartMainBtn: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  cartText: {
    color: '#fff',
    fontSize: 18,
  },
cardLogoContainer: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginVertical: 10,
},
cardLogo: {
  width: 100,
  height: 40,
  resizeMode: 'contain',
},

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    position: 'relative',
  },
  phoneImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {
    fontSize: 11,
    color: '#777',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    flexDirection: 'row',
  },
  ratingAndFavorite: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    marginRight: 10,
  },
  favoriteBtn: {
    padding: 5,
  },
  smallCartBtn: {
    backgroundColor: '#28a745',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginTop: 5,
    position: 'absolute',
    bottom: 5,
    left: 10,
  },
  cartBtnText: {
    color: '#fff',
    fontSize: 12,
  },
  
  cartItemDesc: {
  fontSize: 10,
  color: 'black',
  marginVertical: 2,
},
  
  cartItem: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  cartImage: {
    width: 60,
    height: 80,
    borderRadius: 5,
  },
  cartItemInfo: {
    flex: 1,
    marginLeft: 5,
  },
  cartItemText: {
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyBtn: {
    backgroundColor: '#ddd',
    padding: 5,
    margin: 5,
    borderRadius: 0,
  },
  removeBtn: {
    backgroundColor: '',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  removeBtnText: {
    color: '#28a745',
    fontSize: 16,
  },
  proceedBtn: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  proceedText: {
    color: '#fff',
    fontSize: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    marginTop: 15,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    color: '#007bff',
  },
  chatBtn: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
},
chatBubble: {
  maxWidth: '75%',
  padding: 10,
  marginVertical: 5,
  borderRadius: 10,
},
userBubble: {
  backgroundColor: '#DCF8C6',
  alignSelf: 'flex-end',
},
agentBubble: {
  backgroundColor: '#E5E5EA',
  alignSelf: 'flex-start',
},
chatText: {
  fontSize: 15,
  color: '#333',
},
chatInputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
  borderTopWidth: 1,
  borderColor: '#ccc',
  paddingTop: 10,
},
chatInput: {
  flex: 1,
  height: 40,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 20,
  paddingHorizontal: 15,
},
sendBtn: {
  backgroundColor: '#007bff',
  padding: 10,
  marginLeft: 10,
  borderRadius: 20,
},

  paypalContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 15,
},
paypalLogo: {
  width: 50,
  height: 30,
  marginRight: 10,
},
});

