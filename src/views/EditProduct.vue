<template>
  <modal name="editProduct" :shiftY="0.1" width="80%" height="auto" :scrollable="true">
    <div class="edit">
      <ValidationObserver v-slot="{ handleSubmit }">
        <button @click="$emit('close')" class="close">Close</button>
        <h2><span v-if="isNew">新增</span><span v-else>編輯</span>產品</h2>
        <div class="edit-row">
          <div class="one">
            <label for>輸入圖片網址</label>
            <input type="text" v-model="tempProduct.imageUrl" />
          </div>
        </div>

        <div class="edit-row">
          <div class="one">
            <label for>或上傳圖片</label>
            <i class="fas fa-circle-notch fa-spin" v-if="loadStatus.upLoadImage"></i>
            <input type="file" ref="upImage" @change="upLoadImage" />
          </div>
          <div class="one">
            <img :src="tempProduct.imageUrl" alt />
          </div>
        </div>
        <!-- <div class="edit-row">
          <div class="one">
            <ValidationProvider name="email" rules="required|email" v-slot="{failed, errors }">
              <label for>產品名稱</label>
              <input type="text" id="title" placeholder="請輸入產品名稱" v-model="tempProduct.title" />
           
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
        </div> -->
        <div class="edit-row">
          <div class="one">
            <ValidationProvider name="email" rules="required" v-slot="{failed, errors }">
              <label for="title">產品名稱</label>
              <input type="text" id="title" placeholder="請輸入產品名稱" v-model="tempProduct.title" />
           
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="edit-row">
          <div class="one">
            <ValidationProvider name="分類" rules="required" v-slot="{failed, errors }">
              <label for="category">分類</label>
              <input type="text" id="category" placeholder="請輸入分類" v-model="tempProduct.category" />
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
          <div class="one">
            <ValidationProvider name="單位" rules="required" v-slot="{failed, errors }">
              <label for="unit">單位</label>
              <input type="text" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit" />
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="edit-row">
          <div class="one">
            <ValidationProvider name="原價" rules="required" v-slot="{failed, errors }">
              <label for="origin_price">原價</label>
              <input
                type="number"
                id="origin_price"
                placeholder="請輸入原價"
                v-model="tempProduct.origin_price"
              />
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
          <div class="one">
            <ValidationProvider name="售價" rules="required" v-slot="{failed, errors }">
              <label for="price">售價</label>
              <input type="number" id="price" placeholder="請輸入售價" v-model="tempProduct.price" />
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="edit-row">
          <div class="one">
            <ValidationProvider name="產品描述" rules="required" v-slot="{failed, errors }">
              <label for="description">產品描述</label>
              <textarea
                id="description"
                cols="30"
                rows="10"
                placeholder="請輸入產品描述"
                v-model="tempProduct.description"
              ></textarea>
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
          <div class="one">
            <label for="content">說明內容</label>
            <textarea
              id="content"
              cols="30"
              rows="10"
              placeholder="請輸入說明內容"
              v-model="tempProduct.content"
            ></textarea>
          </div>
        </div>
        <div class="edit-row">
          <div class="one">
            <input
              type="checkbox"
              id="is_enabled"
              v-model="tempProduct.is_enabled"
              :true-value="1"
              :false-value="0"
            />
            <label for="is_enabled">是否啟用</label>
          </div>
        </div>
        <!-- <button @click="updateProduct">送出</button> -->
        <button @click="handleSubmit(updateProduct)">送出</button>

        <button @click="$emit('close')">取消</button>
      </ValidationObserver>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      loadStatus: {
        upLoadImage: false,
      },
      // title:'',
      // tempProduct:'',
    };
  },
  props: ["isNew", "tempProduct"],
  methods: {
    updateProduct() {
      if (this.isNew) {
        this.$emit("is-loading", true);
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
        this.$http.post(url, { data: this.tempProduct }).then((response) => {
          this.$bus.$emit('message:push',response.data.message);  
          this.$emit("get-products");
          this.$emit("close");
          this.$emit("is-loading", false);
        });
      } else {
        this.$emit("isLoading", true);
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.tempProduct.id}`;
        this.$http.put(url, { data: this.tempProduct }).then((response) => {
          this.$bus.$emit('message:push',response.data.message);  
          // console.log(response.data);
          this.$emit("get-products");
          this.$emit("close");
          this.$emit("is-loading", false);
        });
      }
    },
    upLoadImage() {
      console.log(this);
      const image = this.$refs.upImage.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", image);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      this.loadStatus.upLoadImage = true;
      this.$http
        .post(url, formData, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(this.tempProduct);
          this.loadStatus.upLoadImage = false;
          if(response.data.success){
            this.$set(this.tempProduct, "imageUrl", response.data.imageUrl);
            // this.tempProduct.imageUrl=response.data.imageUrl;
          }else{
            this.$bus.$emit('message:push',response.data.message,'fail');
          }
          
          
        });
    },
  },
  created() {},
};
</script>