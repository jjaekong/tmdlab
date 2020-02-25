<template>
    <div class="modal journal-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Nasolacrimal stent with shape memory as an advanced alternative to silicone products</h5>
                    <span></span>
                </div>
                <div class="modal-body">
                    <dl>
                        <dt>Published at:</dt>
                        <dd>Acta Biomaterilia (7th of November 2019 IF 6.638)</dd>
                        <dt>Summary:</dt>
                        <dd>A polymer-based graft is formed which is inserted to the occluded tear duct of a rabbit and which can secure the tear duct by expanding itself via body temperature. Shape memory polymer properties compared with silicon, in vitro cytotoxicity and biofilm formation inhibition, and in vivo effectiveness are confirmed.</dd>
                    </dl>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">Close</button>
                    <a class="btn btn-details" href="https://www.sciencedirect.com/science/article/pii/S1742706119307366?via%3Dihub" target="_blank">
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