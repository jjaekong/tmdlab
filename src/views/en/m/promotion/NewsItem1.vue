<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Applied for 2 patents related to stent using shape memory polymer</h5>
                    <time>19th of December, 2018</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_1.jpg">
                    <p>
                        2 patents have been applied related to stent development using shape memory polymer. First is ‘low molecular heparin-releasing structure in spreading shape memory polymer stent at the point of occlusion (application number: 10-2018-0164737)’. It holds the contents on the biocompatible vascular transplantation SMP stent. When inserted into the occlusive blood vessel, heparin is emitted from the stent and unfolds itself.<br>
                        Second patent is: ‘development of non-degradable stent coating material (application number: 10-2018-0164737)’, holding the contents of non-degradable SMP stent. It has its significance that we have secured all the related rights on both degradable and non-degradable SMP vascular stents, through these two patents.
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