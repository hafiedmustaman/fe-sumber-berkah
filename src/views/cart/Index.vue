<template>
    <div class="container-fluid mb-5 mt-4">
          <div class="row">
              <div class="col-md-6">
                  <div class="card border-0 shadow rounded">
                      <div class="card-body">
                          <h5><i class="fa fa-shopping-cart"></i> DETAIL PESENAN</h5>
                          <hr>
                          <table class="table"
                              style="border-style: solid !important;border-color: rgb(198, 206, 214) !important;">
                              <tbody>
                                  <tr v-for="cart in carts" :key="cart.id" style="background: #edf2f7;">
                                      <td class="b-none" width="25%">
                                          <div class="wrapper-image-cart">
                                              <img :src="cart.product.image" style="width: 100%;border-radius: .5rem">
                                          </div>
                                      </td>
                                      <td class="b-none" width="50%">
                                          <h5><b>{{ cart.product.title }}</b></h5>
                                          <table class="table-borderless" style="font-size: 14px">
                                              <tr>
                                                  <td style="padding: .20rem">QTY</td>
                                                  <td style="padding: .20rem">:</td>
                                                  <td style="padding: .20rem"><b>{{ cart.quantity }}</b></td>
                                              </tr>
                                          </table>
  
                                      </td>
                                      <td class="b-none text-right">
                                          <p class="m-0 font-weight-bold">Rp. {{ moneyFormat(cart.price) }}
                                          </p>
  
                                          <p class="m-0">
                                              <s style="text-decoration-color:red">Rp.
                                                  {{ moneyFormat(cart.product.price * cart.quantity) }}</s>
                                          </p>
  
                                          <br>
                                          <div class="text-right">
                                              <button class="btn btn-sm btn-danger">
                                                  <i class="fa fa-trash"></i>
                                              </button>
                                          </div>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
  
                          <table class="table table-default">
                              <tbody>
                                  <tr>
                                      <td class="set-td text-left" width="60%">
                                          <p class="m-0">JUMLAH </p>
                                      </td>
                                      <td class="set-td  text-right" width="30%">&nbsp; : Rp.</td>
                                      <td class="text-right set-td ">
                                          <p class="m-0" id="subtotal"> {{ moneyFormat(cartTotal) }}
                                          </p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td class="set-td text-left border-0">
                                          <p class="m-0">ONGKOS KIRIM (<strong>{{ cartWeight }}</strong> gram)</p>
                                      </td>
                                      <td class="set-td border-0 text-right">&nbsp; : Rp.</td>
                                      <td class="set-td border-0 text-right">
                                          <p class="m-0" id="ongkir-cart"> 0</p>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td class=" text-left border-0">
                                          <p class="font-weight-bold m-0 h5 text-uppercase">Grand Total </p>
                                      </td>
                                      <td class=" border-0 text-right">&nbsp; : Rp.</td>
                                      <td class=" border-0 text-right">
                                          <p class="font-weight-bold m-0 h5" align="right">
                                              0 </p>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
  
                      </div>
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="card border-0 shadow rounded">
                      
                      <!-- start ongkos kirim -->
  
                      <div class="card-body">
                          <h5><i class="fa fa-user-circle"></i> RINCIAN PENGIRIMAN</h5>
                          <hr>
                          
                      </div>
  
                      <!-- end ongkos kirim -->
  
                  </div>
              </div>
          </div>
      </div>
  </template>
  
  <script>
      import { onMounted, computed } from 'vue'
      import { useStore } from 'vuex' // <-- vuex
  
      export default {
  
          name: 'CartComponent',
  
          setup() {
  
              //store vuex
              const store = useStore()
  
              //mounted cart
              onMounted(() => {
              
                  //menjalankan beberapa actions di module cart
                  store.dispatch('cart/cartCount')  // <-- untuk memanggil action "cartCount" di module "cart"
                  store.dispatch('cart/cartTotal')  // <-- untuk memanggil action "cartTotal" di module "cart"
                  store.dispatch('cart/cartWeight') // <-- untuk memanggil action "cartWeight" di module "cart"
              
              })
  
              //get data cart dari getters cart di module cart
              const carts = computed(() => {
                  return store.getters['cart/getCart']
              })
  
              //get total cart dari state cartTotal di module cart
              const cartTotal = computed(() => {
                  return store.state.cart.cartTotal
              })
  
              //get cart weight dari state cartWeight di module cart
              const cartWeight = computed(() => {
                  return store.state.cart.cartWeight
              })
  
  
              return {
                  carts,              // <-- state carts
                  cartTotal,          // <-- state cartTotal
                  cartWeight,         // <-- state cartWeight
              }
  
          }
  
      }
  </script>