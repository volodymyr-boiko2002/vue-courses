<template>
  <div>
    <div class="pt-4 pb-5">
      <div v-if="courses.length !== 0">
        <div v-for="(course, index) in courses" :key="course.id"
             :class="{ 'first-table-border': index === 0, 'table-border' : index !== 0 }"
             class="row gx-0 d-flex align-items-center justify-content-between p-5">
          <div class="col-md-8 px-md-0">
            <p class="category-name mb-1">{{ course.category }}</p>
            <h4>{{ course.title }}</h4>
            <p class="mb-0">{{ course.description }}</p>
            <div class="d-flex justify-content-md-start justify-content-center">
              <div @click="$router.push(`/course/${course.id}`)"
                   class="btn mt-3">
                Discover details
              </div>
            </div>
          </div>
          <div class="col-md-3 pt-md-0 pt-4 px-md-0 text-md-end text-center">
            <div v-if="course.discountByPercent != null" class="discount pb-1">
              {{ course.discountByPercent }}% discount,
              <span class="text-decoration-line-through">{{ course.price }} {{ course.currency }}</span>
            </div>
            <div class="btn justify-content-center align-items-center" @click="showPopup(course)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                   class="bi bi-basket2-fill"
                   viewBox="0 0 16 16">
                <path
                    d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"/>
              </svg>
              <div v-if="course.discountByPercent == null" class="ps-2">
                Buy {{ course.price }} {{ course.currency }}
              </div>
              <div v-else class="ps-2">
                Buy {{ course.price - course.price * course.discountByPercent / 100 }} {{ course.currency }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h4 class="course-not-found pt-5 text-center">Sorry, course not found. Try to find another interesting one!</h4>
      </div>
    </div>
    <!--  Popup -->
    <div class="popup-container" :class="{'d-none' : popup.isPopupHidden }">
      <div class="popup-content">
        <span class="close-button" @click="popup.isPopupHidden = true">&times;</span>
        <p class="mb-0">You was interested in <strong>{{ popup.popupTitle }}</strong>, we will contact with you soon.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      popup: {isPopupHidden: true, popupTitle: ''}
    }
  },
  methods: {
    showPopup(currentCourse) {
      this.popup.isPopupHidden = false;
      this.popup.popupTitle = currentCourse.title;
    }
  }
}
</script>

<style scoped>

.category-name {
  font-size: 12px;
  font-weight: 700;
  color: #dfd8ff;
}

.first-table-border {
  border: #f3f0ff 2px solid !important;
}

.table-border {
  border: #f3f0ff 2px solid;
  border-top: 0;
}

.btn {
  display: inline-flex;
  padding: 0.7rem 1.2rem;
  color: #483089;
  background: #dfd8ff;
  border-radius: 0;
  font-weight: 700;
  font-size: 14px;
}

.btn:hover {
  background: #c5bbf2;
  transition: 0.2s;
}

.discount {
  color: #d52f5a;
  font-weight: 700;
  font-size: 12px;
}

.course-not-found{
  color: #483089;
}

/* Popup */
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.popup-content {
  position: absolute;
  background: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  text-align: center;
}

.close-button {
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
  font-size: 25px;
  color: #333;
}

</style>