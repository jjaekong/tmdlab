<template>
    <div class="modal journal-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Hydrogel Crosslinking-Programmed Release of Nitric Oxide Regulates Source-Dependent Angiogenic Behaviors of Human Mesenchymal stem Cell</h5>
                    <span></span>
                </div>
                <div class="modal-body">
                    <dl>
                        <dt>Published at:</dt>
                        <dd>Science Advances (2020.02.26, IF 12.8)</dd>
                        <dt>Summary:</dt>
                        <dd>Vessel stabilization and vessel generation effects of bone marrow-derived mesenchymal stem cells (BMSCs) and adipose tissue-derived mesenchymal stem cells (ADSCs) are confirmed on the 3-dimensional nitric oxide (NO) gel based on microbial transglutaminase-crosslinkable gelatin gel (mTG gel).</dd>
                    </dl>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">Close</button>
                    <a class="btn btn-details" href="https://advances.sciencemag.org/content/6/9/eaay5413" target="_blank">
                        <img src="@/assets/img/ico_details.png" />
                        Detailed view
                    </a>
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
			this.$router.push('/m/en/promotion/journal');
		},
	}
}
</script>