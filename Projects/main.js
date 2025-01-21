const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
  cart: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }
}, { timestamps: true });

// models/Store.js
const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  logo: String,
  isActive: { type: Boolean, default: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
}, { timestamps: true });

// models/Product.js
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  basePrice: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductImage' }],
  variants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant' }]
}, { timestamps: true });

// models/ProductVariant.js
const productVariantSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  size: String,
  color: String,
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  sku: { type: String, required: true, unique: true }
});

// models/Category.js
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true }
});

// models/Order.js
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    variant: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant' },
    quantity: Number,
    price: Number
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'paid', 'shipped', 'delivered'], default: 'pending' },
  shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
  trackingNumber: String,
  paymentDetails: {
    method: String,
    transactionId: String,
    status: String
  }
}, { timestamps: true });

// models/Cart.js
const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    variant: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductVariant' },
    quantity: Number
  }]
}, { timestamps: true });

// models/Address.js
const addressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipCode: { type: String, required: true },
  isDefault: { type: Boolean, default: false }
});

// models/ProductImage.js
const productImageSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  url: { type: String, required: true },
  isMain: { type: Boolean, default: false }
});

module.exports = {
  User: mongoose.model('User', userSchema),
  Store: mongoose.model('Store', storeSchema),
  Product: mongoose.model('Product', productSchema),
  ProductVariant: mongoose.model('ProductVariant', productVariantSchema),
  Category: mongoose.model('Category', categorySchema),
  Order: mongoose.model('Order', orderSchema),
  Cart: mongoose.model('Cart', cartSchema),
  Address: mongoose.model('Address', addressSchema),
  ProductImage: mongoose.model('ProductImage', productImageSchema)
};