/**
 * @file mofron-comp-iconliner/index.js
 * @brief icon for select box component
 * @license MIT
 */
const SelectBox = require('mofron-comp-selectbox');
const Text      = require('mofron-comp-text');
const LinerText = require('mofron-comp-linertxt');
const BoxIcon   = require('mofron-comp-boxicon');
const HrzCenter = require('mofron-layout-hrzcenter');
const ConfArg   = mofron.class.ConfArg;
const comutl    = mofron.util.common;

module.exports = class extends SelectBox {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname('ilinerbox');
            
	    /* init config */
	    this.shortForm('image');
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    initDomConts () {
        try {
            super.initDomConts();
            //this.layout(new HrzCenter(90));
	    let wrap = new mofron.class.Component({
	                   height: '100%',
			   style:  {
			       'display': 'flex', 'position': 'relative',
                               'left':    '5%',   'width':    '90%'
			   }
		       });
            this.child(wrap);
	    this.styleDom(this.childDom());
            this.childDom(wrap.childDom());
            
	    let txt_wrap = new mofron.class.Component({
	                       style: { 'margin-top': '0.3rem', 'margin-left': '0.15rem;' },
			   });
            this.title('', { 'size': '0.25rem' });
            this.desc('',  { 'size': '0.18rem' });
            txt_wrap.child([ this.title(), this.desc() ]);
            
            this.child([ this.icon(), txt_wrap ]);
            
            
	    this.hoverEvent((h1,h2,h3) => {
                try {
                    h1.title().liner(h2);
		} catch (e) {
                    console.error(e.stack);
                    throw e;
		}
	    });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    icon (prm,cnf) {
        try {
            if ('string' === typeof prm) {
                this.icon().image(prm);
		this.config(cnf);
                return;
            }
	    return this.innerComp('icon', prm, BoxIcon);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    title (prm,cnf) {
        try {
            if ('string' === typeof prm) {
                this.title().text(prm);
                this.title().config(cnf);
                return;
            }
            return this.innerComp('title', prm, LinerText);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    desc (prm, cnf) {
        try {
            if ('string' === typeof prm) {
                this.desc().text(prm);
                this.desc().config(cnf);
                return;
            }
            return this.innerComp('desc', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
