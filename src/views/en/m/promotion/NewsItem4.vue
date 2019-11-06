<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Graduated the entrance master course for medical devices, under the medical device CHAMP curriculum 2019 (16th of July, 2019 – 18th of July, 2019)</h5>
                    <time>16th of July, 2019</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_4.jpg">
                    <p>
                        All employees in TMD LAB Corporation have completed 3-day CHAMP training course (Consortium for HRD Ability Magnified Program) from 16th to 18th in 2019, held by KMDIA (Korea Medical Devices Industry Association). Through the course, the opportunity was given to understand basic contents on medical devices for overall medical device industries from licensing to post-management on the medical devices, and to strengthen one’s ground as the medical device industry personnel.
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">Close</button>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
	mounted: function() {
		document.body.classList.add('modal-open')
	},
	destroyed: function() {
		document.body.classList.remove('modal-open')
	},
	methods: {
		close: function() {
			this.$router.push('/m/en/promotion/news');
		},
	}
}
</script>