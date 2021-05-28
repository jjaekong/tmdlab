<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">2021 Spring Biomaterials Society Outstanding Paper Presentation Award</h5>
                    <time>26th of March 2021</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/m_news_13.jpg">
                    <p>
                        In March 2021, the 2021 Korean Society for Biomaterials Spring Conference hosted by the Korean Society for Biomaterials was held as an online conference.<br>
                        The Biomaterials Society is held for the purpose of exchanging academic and technical information by gathering researchers engaged in research on biomaterials used for medical purposes, medical people who use them directly in patients and related industry workers.<br>
                        At this conference, TMD Lab Co., Ltd. presented the results of research on the outer vascular wall support, a medical device for preventing blood vessel stenosis based on shape memory polymers, and the glaucoma support, a medical device for treating glaucoma, and won the Best Paper Presentation Award.
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