<?php

namespace Statamic\Addons\Tags;

use Statamic\Extend\Filter;

class TagsFilter extends Filter
{
    /**
     * Perform filtering on a collection
     *
     * @return \Illuminate\Support\Collection
     */
    public function filter()
    {       
        return $this->collection->filter(function ($entry) 
        {                
            //Get the match_tags and create an array of values
            $match_tags = explode( '|', $this->get('match_tags', '' ));
            //Checks first to find all pinned resources
            if($entry->get('pinned') == false){
                //creates an array containing all tags of current post
                $post_tags = $entry->get('tags');
                //loops through the page tags
                foreach ($match_tags as $match_tag){
                    //loops through all the post tags
                    foreach($post_tags as $post_tag){
                        //if a both tags match the entry is added to the array
                        if($match_tag == $post_tag){                    
                            return $entry;
                        }
                    }
                }
            }             
        });
    }
}
