<template>
  <modal
    name="editProduct"
    :shiftY="0.3"
    :maxWidth="800"
    width="95%"
    height="auto"
    :scrollable="true"
  >
    <div class="edit-page">
      <ValidationObserver v-slot="{ handleSubmit }">
        <button @click="$emit('close')" class="close-position button-none">
          <img src="@/assets/images/icon_close.svg" alt="" />
        </button>
        <h2 class="edit-page__title">
          <span v-if="isNew">新增</span><span v-else>編輯</span>產品
        </h2>
        <div class="edit">
          <div class="edit__item form-group">
            <label for>輸入圖片網址</label>
            <input type="text" class="form-control" v-model="editTemp.imageUrl" />
          </div>
          <div class="edit__row form-row">
            <div class="edit__item bag-md-9 form-group">
              <label for>或上傳圖片</label>
              <i class="fas fa-circle-notch fa-spin" v-if="loadStatus.upLoadImage"></i>
              <input type="file" ref="upImage" @change="upLoadImage" />
            </div>
            <div v-if="editTemp.imageUrl" class="edit__item bag-md-3 bag-6 form-group">
              <img :src="editTemp.imageUrl" alt />
            </div>
          </div>
          <!-- <div class="edit__row">
          <div class="one">
            <ValidationProvider name="email" rules="required|email" v-slot="{failed, errors }">
              <label for>產品名稱</label>
              <input type="text" id="title" placeholder="請輸入產品名稱" v-model="editTemp.title" />
           
              <span class="text-danger" v-if="failed">{{errors[0]}}</span>
            </ValidationProvider>
          </div>
         </div> -->

          <div class="edit__item form-group">
            <ValidationProvider
              name="產品名稱"
              rules="required"
              v-slot="{ failed, errors }"
            >
              <label for="title">產品名稱</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="請輸入產品名稱"
                v-model="editTemp.title"
              />

              <span class="text-danger" v-if="failed">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>

          <div class="edit__row form-row">
            <div class="edit__item bag-6 form-group">
              <ValidationProvider
                name="分類"
                rules="required"
                v-slot="{ failed, errors }"
              >
                <label for="category">分類</label>
                <select
                  name=""
                  class="form-control"
                  id="category"
                  v-model="editTemp.category"
                >
                  <option disabled value="null">請選擇</option>
                  <option v-for="item in category" :key="item" :value="item">
                    {{ item | categoryChangeCn }}
                  </option>
                </select>
                <!-- <input
                  type="text"
                  class="form-control"
                  id="category"
                  placeholder="請輸入分類"
                  v-model="editTemp.category"
                /> -->
                <span class="text-danger" v-if="failed">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="edit__item bag-6 form-group">
              <ValidationProvider
                name="單位"
                rules="required"
                v-slot="{ failed, errors }"
              >
                <label for="unit">單位</label>
                <input
                  type="text"
                  class="form-control"
                  id="unit"
                  placeholder="請輸入單位"
                  v-model="editTemp.unit"
                />
                <span class="text-danger" v-if="failed">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
          <div class="edit__row form-row">
            <div class="edit__item bag-6 form-group">
              <ValidationProvider
                name="原價"
                rules="required"
                v-slot="{ failed, errors }"
              >
                <label for="origin_price">原價</label>
                <input
                  type="number"
                  class="form-control"
                  id="origin_price"
                  placeholder="請輸入原價"
                  v-model="editTemp.origin_price"
                />
                <span class="text-danger" v-if="failed">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="edit__item bag-6 form-group">
              <label for="price">售價</label>
              <input
                type="number"
                class="form-control"
                id="price"
                placeholder="請輸入售價"
                v-model="editTemp.price"
              />
            </div>
          </div>
          <div class="edit__row form-row">
            <div class="edit__item bag-md-6 form-group">
              <label for="description">產品描述</label>
              <textarea
                class="form-control"
                id="description"
                cols="30"
                rows="6"
                placeholder="請輸入產品描述"
                v-model="editTemp.description"
              ></textarea>
            </div>
            <div class="edit__item bag-md-6 form-group">
              <label for="content">說明內容</label>
              <textarea
                class="form-control"
                id="content"
                cols="30"
                rows="6"
                placeholder="請輸入說明內容"
                v-model="editTemp.content"
              ></textarea>
            </div>
            <!-- <div class="one">
            <input type="text" v-model="editTemp.video">
          </div> -->
          </div>
          <div class="edit__row form-row">
            <div class="edit__item bag-6 form-group">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="is_enabled"
                  v-model="editTemp.is_enabled"
                  :true-value="1"
                  :false-value="0"
                />
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
            <div class="edit__item bag-6 form-group">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="hotProducts"
                  v-model="editTemp.hotProducts"
                  :true-value="1"
                  :false-value="0"
                />
                <label class="form-check-label" for="hotProducts">是否熱銷</label>
              </div>
            </div>
          </div>
          <!-- <button @click="updateProduct">送出</button> -->
          <div class="btn-wrapper-side">
            <button class="btn btn-outline-primary" @click="$emit('close')">取消</button>
            <button class="btn btn-primary" @click="handleSubmit(updateProduct)">
              送出
            </button>
          </div>
        </div>
      </ValidationObserver>
    </div>
  </modal>
</template>

<script>
import category from "@/assets/category";
export default {
  data() {
    return {
      category,
      loadStatus: {
        upLoadImage: false,
      },
      editTemp: {},
    };
  },
  props: ["isNew", "tempProduct"],
  watch: {
    tempProduct() {
      this.editTemp = Object.assign({}, this.tempProduct);
      if (this.isNew) {
        this.editTemp.category = null;
      }
    },
  },
  methods: {
    updateProduct() {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
        this.$store.commit("LOADING", true);
        this.$http.post(url, { data: this.editTemp }).then((response) => {
          this.$bus.$emit("message:push", response.data.message);
          this.$emit("get-products");
          this.$emit("close");
          this.$store.commit("LOADING", false);
        });
      } else {
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.editTemp.id}`;
        this.$store.commit("LOADING", true);
        this.$http.put(url, { data: this.editTemp }).then((response) => {
          this.$bus.$emit("message:push", response.data.message);
          // console.log(response.data);
          this.$emit("get-products");
          this.$emit("close");
          this.$store.commit("LOADING", false);
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
          console.log(this.editTemp);
          this.loadStatus.upLoadImage = false;
          if (response.data.success) {
            this.$set(this.editTemp, "imageUrl", response.data.imageUrl);
            // this.tempProduct.imageUrl=response.data.imageUrl;
          } else {
            this.$bus.$emit("message:push", response.data.message, "fail");
          }
        });
    },
  },
  created() {},
  mounted() {
    console.log(category);
  },
};
</script>
