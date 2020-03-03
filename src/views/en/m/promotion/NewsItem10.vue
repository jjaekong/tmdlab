<template>
    <div class="modal news-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Thesis on the 3-dimensional micro-channel network inducing vessel generation published at the international academic journal (Nature Communication, IF 11.88)</h5>
                    <time>30th January 2020</time>
                </div>
                <div class="modal-body">
                    <img class="news-image" src="@/assets/img/m/promotion/img_news_10.jpg">
                    <p>
                        TMD LAB Corporation developed the hydrogel-based micro-channel network which can induce vessel generation from the deteriorated tissue. Its effect is published at ‘Nature Communication’ a sister journal of Nature (title: Microchannel Network Hydrogel Induced Ischemic Anastomotic Blood Perfusion).<br><br>
                        Vessel generation induction from the deteriorated part has remained unsolved for a long time. The most common approach is a local treatment using pro-angiogenic molecules. This however is known to have critical negative effects including inflammatory coupling, neoplastic vessel activation, and untargeted circulation.<br><br>
                        This study develops the micro-channel network based on gelatin hydrogel in order to overcome the diffusion limit of nutrients and oxygen via a 3-dimensional way. 3-dimensional channel network is applied to physically engineer the implantation on the deteriorated vessel, without the pro-angiogenic molecules. Developed hydrogel is implanted to the ischemic mouse pig models, and it is confirmed that the severely deteriorated tissue due to anastomosis with adjacent tissues and micro-channel perfusion is successfully generated. This effect is induced by the size-specific regeneration of the micro-channel and by macrophage polarization, along with functional recovery of endothelial cells. <br><br>
                        This technology is expected to contribute to developing a treatment for hypoxia and inflammation-related disease, and to developing implantation material for vessel induction for avascular necrosis of a femoral head.
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