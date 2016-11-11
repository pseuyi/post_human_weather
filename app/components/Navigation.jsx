import React, { Component } from 'react';
import { connect } from 'react-redux';
import pos from '../help'

export class Navigation extends Component {


  componentDidMount () {

    // console.log('what is pos', this.refs.hello.dataset)
  }


  render() {

    return (
      <div>

        <div type='text' id='globe-pos' data-position='' className='top-container' ref='hello' value=''></div>
        <input className='top-input'></input>
        <input className='lower-right-input' placeholder='2016'></input>
  
        <div className='marquee'>
          <p>
           Ours is a world in vertigo. It is a world that swarms with technological mediation, interlacing our daily lives with abstraction, virtuality, and complexity. XF constructs a feminism adapted to these realities: a feminism of unprecedented cunning, scale, and vision; a future in which the realization of gender justice and feminist emancipation contribute to a universalist politics assembled from the needs of every human, cutting across race, ability, economic standing, and geographical position. No more futureless repetition on the treadmill of capital, no more submission to the drudgery of labour, productive and reproductive alike, no more reification of the given masked as critique. Our future requires depetrification. XF is not a bid for revolution, but a wager on the long game of history, demanding imagination, dexterity and persistence. 
          </p>
        </div>
        <div className='marquee marquee1'>
          <p>XF asserts that adapting our behaviour for an era of Promethean complexity is a labour requiring patience, but a ferocious patience at odds with 'waiting'. Calibrating a political hegemony or insurgent memeplex not only implies the creation of material infra-structures to make the values it articulates explicit, but places demands on us as subjects. How are we to become hosts of this new world? How do we build a better semiotic parasite–one that arouses the desires we want to desire, that orchestrates not an autophagic orgy of indignity or rage, but an emancipatory and egalitarian community buttressed by new forms of unselfish solidarity and collective self-mastery?</p>
        </div>
        <div className='marquee marquee2'>
          <p>We take politics that exclusively valorize the local in the guise of subverting currents of global abstraction, to be insufficient. To secede from or disavow capitalist machinery will not make it disappear. Likewise, suggestions to pull the lever on the emergency brake of embedded velocities, the call to slow down and scale back, is a possibility available only to the few–a violent particularity of exclusivity–ultimately entailing catastrophe for the many. Refusing to think beyond the microcommunity, to foster connections between fractured insurgencies, to consider how emancipatory tactics can be scaled up for universal implementation, is to remain satisfied with temporary and defensive gestures. XF is an affirmative creature on the offensive, fiercely insisting on the possibility of large-scale social change for all of our alien kin.</p>
        </div>
        <div className='marquee marquee3'>
          <p>Our lot is cast with technoscience, where nothing is so sacred that it cannot be reengineered and transformed so as to widen our aperture of freedom, extending to gender and the human. To say that nothing is sacred, that nothing is transcendent or protected from the will to know, to tinker and to hack, is to say that nothing is supernatural. 'Nature'–understood here, as the unbounded arena of science–is all there is. And so, in tearing down melancholy and illusion; the unambitious and the non-scaleable; the libidinized puritanism of certain online cultures, and Nature as an un-remakeable given, we find that our normative anti-naturalism has pushed us towards an unflinching ontological naturalism. There is nothing, we claim, that cannot be studied scientifically and manipulated technologically.</p>
        </div>
        <div className='marquee marquee4'>
          <p>Xenofeminism is gender-abolitionist. 'Gender abolitionism' is not code for the eradication of what are currently considered 'gendered' traits from the human population. Under patriarchy, such a project could only spell disaster–the notion of what is 'gendered' sticks disproportionately to the feminine. But even if this balance were redressed, we have no interest in seeing the sexuate diversity of the world reduced. Let a hundred sexes bloom! 'Gender abolitionism' is shorthand for the ambition to construct a society where traits currently assembled under the rubric of gender, no longer furnish a grid for the asymmetric operation of power. 'Race abolitionism' expands into a similar formula–that the struggle must continue until currently racialized characteristics are no more a basis of discrimination than than the color of one's eyes. Ultimately, every emancipatory abolitionism must incline towards the horizon of class abolitionism, since it is in capitalism where we encounter oppression in its transparent, denaturalized form: you're not exploited or oppressed because you are a wage labourer or poor; you are a labourer or poor because you are exploited.</p>
        </div>

        <div className='bottom-container'>
          <div className='left-bar half-bar'>
            <h5>left bar buttom</h5>
          </div>
          <div className='right-bar half-bar'>
            <h5>right bar button</h5>
          </div>
          <div className='full-bar'>
            <h3>fullbar</h3>
          </div>
        </div>

      </div>
    )
  }
}

export default connect (
  state=>({pos: state.position}),
  null
  )(Navigation)