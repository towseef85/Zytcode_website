import React from 'react'
import HRServiceItems from './HRServiceItems';

const Service= [
    {
        id: '1',
        HRtitles : 'Export Presets',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'panel',
        rclass : 'pr_70',
        iclass: 'icon_one',
    },
    {
        id: '2',
        HRtitles : 'Grid and Guides',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'layout-grid2',
        rclass : 'pl_50 pr_20',
        iclass: 'icon_two',
    },
    {
        id: '3',
        HRtitles : 'Pixel Precision',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'fullscreen',
        rclass : 'pl_70',
        iclass: 'icon_three',
    },
    {
        id: '4',
        HRtitles : 'Vector Editing',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'vector',
        rclass : 'pr_70',
        iclass: 'icon_four',
    },
    {
        id: '5',
        HRtitles : 'Cloud Service',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'cloud-down',
        rclass : 'pl_50 pr_20',
        iclass: 'icon_five',
    },
    {
        id: '6',
        HRtitles : 'Iterate at Speed',
        HRdescription: 'Bog cheeky bugger blow off only a quid grub he legged it porkies tosser young delinquent argy-bargy.',
        Hicon: 'bolt',
        rclass : 'pl_70',
        iclass: 'icon_six',
    }
]

function HRService() {
    return (
        <section className="prototype_service_info">
                <div className="symbols-pulse active">
                    <div className="pulse-1"></div>
                    <div className="pulse-2"></div>
                    <div className="pulse-3"></div>
                    <div className="pulse-4"></div>
                    <div className="pulse-x"></div>
                </div>
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height45 text-center mb_90">SaasLand is built for designers like you.<br/> With useful features, an intuitive interface.</h2>
                    <div className="row p_service_info">
                            {
                                Service.map(item => {
                                    return(
                                        <HRServiceItems HRtitle={item.HRtitles} HRdescription={item.HRdescription}  Hicon={item.Hicon} rclass={item.rclass} iclass={item.iclass} key={item.id}/>
                                    )
                                })
                            }
                    </div>
                </div>
            </section>
    )
}

export default HRService
