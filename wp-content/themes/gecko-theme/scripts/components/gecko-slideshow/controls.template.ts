import GeckoControls from "./controls";
import { $html, $each, $if } from "ekma";

export default (controls: GeckoControls) => $html`
	${ $if(controls.state.arrows, () => $html`
		<a href="#" class="left" data-action="left" title="Left"></a>
		<a href="#" class="right" data-action="right" title="right"></a>
	`) }

	${ $if(controls.state.dots, () => $html`
		<div class="dots">
			${ $each(controls.parent.slides, (slide, i) => $html`
				<div class="dot" role="button" data-slide="${ i }"></div>
			`) }
		</div>
	`) }
`;