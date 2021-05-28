<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Outer Vascular Wall Support Research Paper, Selected as Small Journal Cover (2021.05) </h5>
                    <time>6th of May 2021</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/m_news_14.jpg">
                    <p>
                        Outer Vascular Wall Support Research Paper(Dilation-Responsive Microshape Programming Prevents Vascular Graft Stenosis), published in Small (IF 11.459) on March 17, 2021, made the cover of the May 2021 issue (Vol.17 No.18).
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