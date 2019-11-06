<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Participated into the KTERMS (Korean Tissue Engineering and Regenerative Medicine Society) conference event 2019, selected to be awarded ‘superb’ in the poster division</h5>
                    <time>6th of June, 2019</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_3.jpg">
                    <p>
                        KTERMS (Korea Tissue Engineering and Regenerative Medicine Society) has held its own international academic conference for 3 days from 6th to 8th of June in 2019, at International Convention Center Jeju. KTERMS is an integrated academic conference which shares and presents the research results on regenerative medicine in medical, natural science and engineering fields. It also involved a variety of symposiums, as well as keynote addresses from prominent researchers worldwide.<br>
                        TMD LAB Corporation in this conference has made poster presentations on the research result, which have been awarded with the ‘superb poster presentation reward’, of: Nasolacrimal stent with shape memory as an alternative to silicone products, and External wrapping device to prevent vascular stenosis.
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